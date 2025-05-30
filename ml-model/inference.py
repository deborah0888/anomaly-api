# import torch
# from transformers import ViTForImageClassification, ViTImageProcessor
# from PIL import Image
# import io

# # Load models
# MODEL_PATHS = {
#     "screws": "models/vit-screws-model",
#     "transistors": "models/vit-transistors-model"
# }

# models = {}
# processors = {}

# for category, path in MODEL_PATHS.items():
#     model = ViTForImageClassification.from_pretrained(path)
#     processor = ViTImageProcessor.from_pretrained(path)
#     model.eval()
#     models[category] = model
#     processors[category] = processor

# def predict(category, image_bytes):
#     if category not in models:
#         raise ValueError(f"Unsupported category: {category}")
    
#     image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
#     inputs = processors[category](images=image, return_tensors="pt")
    
#     with torch.no_grad():
#         outputs = models[category](**inputs)
#         logits = outputs.logits
#         anomaly_score = torch.softmax(logits, dim=1)[0][1].item()  # Binary classification: 1 = anomaly

#     return {
#         "anomaly_score": round(anomaly_score, 4),
#         "category": category
#     }
# import torch
# from transformers import ViTForImageClassification, ViTImageProcessor
# from PIL import Image
# import io
# import os

# # Define local model directories with plural keys
# MODEL_PATHS = {
#     "screws": "models/vit-screw-model",
#     "transistors": "models/vit-transistors-model"
# }

# models = {}
# processors = {}

# # Load models locally
# for category, path in MODEL_PATHS.items():
#     if not os.path.exists(path):
#         raise ValueError(f"Model path for {category} not found: {path}")
    
#     processor = ViTImageProcessor.from_pretrained(path, local_files_only=True)
#     model = ViTForImageClassification.from_pretrained(path, local_files_only=True)
#     model.eval()

#     models[category] = model
#     processors[category] = processor

# # Mapping singular to plural keys expected in models
# CATEGORY_MAP = {
#     "screw": "screws",
#     "screws": "screws",
#     "transistor": "transistors",
#     "transistors": "transistors"
# }

# def predict(category, image_bytes):
#     # Normalize category to plural form used in MODEL_PATHS
#     normalized_category = CATEGORY_MAP.get(category.lower())
#     if not normalized_category or normalized_category not in models:
#         raise ValueError(f"Unsupported category: {category}")

#     image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
#     inputs = processors[normalized_category](images=image, return_tensors="pt")

#     with torch.no_grad():
#         outputs = models[normalized_category](**inputs)
#         logits = outputs.logits
#         anomaly_score = torch.softmax(logits, dim=1)[0][1].item()  # Assuming binary classification

#     return {
#         "anomaly_score": round(anomaly_score, 4),
#         "category": normalized_category
#     }
import torch
from transformers import ViTForImageClassification, ViTImageProcessor
from PIL import Image
import io
import os
import cv2
import numpy as np
import requests
import zipfile

# === Google Drive download helpers ===

def download_file_from_google_drive(file_id, destination):
    URL = "https://docs.google.com/uc?export=download"
    session = requests.Session()
    response = session.get(URL, params={'id': file_id}, stream=True)
    token = get_confirm_token(response)

    if token:
        response = session.get(URL, params={'id': file_id, 'confirm': token}, stream=True)

    save_response_content(response, destination)

def get_confirm_token(response):
    for key, value in response.cookies.items():
        if key.startswith('download_warning'):
            return value
    return None

def save_response_content(response, destination):
    CHUNK_SIZE = 32768
    os.makedirs(os.path.dirname(destination), exist_ok=True)
    with open(destination, "wb") as f:
        for chunk in response.iter_content(CHUNK_SIZE):
            if chunk:
                f.write(chunk)

def download_and_extract_model(file_id, target_dir):
    zip_path = f"{target_dir}.zip"
    print(f"⬇️ Downloading model zip to {zip_path}...")
    download_file_from_google_drive(file_id, zip_path)
    print(f"📦 Extracting {zip_path} to {target_dir}...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(target_dir)
    os.remove(zip_path)

# === Google Drive file IDs ===
GDRIVE_MODEL_IDS = {
    "screws": "1SpBbwbOGQvejhrRmUWk3CMtPFMHN4XEn",
    "transistors": "1yAhd7jTHYdp4dbdAQHQSrcKZEsFFZ4Jt"
}

# === Label Maps ===
LABEL_MAPS = {
    "screws": {
        0: "good",
        1: "manipulated_front",
        2: "scratch_head",
        3: "scratch_neck",
        4: "thread_side",
        5: "thread_top"
    },
    "transistors": {
        0: "broken_leg",
        1: "burn_marks",
        2: "cracked_case",
        3: "good",
        4: "scratches"
    }
}

# === Model paths ===
MODEL_PATHS = {
    "screws": "models/vit-screw-model",
    "transistors": "models/vit-transistors-model"
}

# === Category mapping ===
CATEGORY_MAP = {
    "screw": "screws",
    "screws": "screws",
    "transistor": "transistors",
    "transistors": "transistors"
}

models = {}
processors = {}

# === Model loading ===
def load_models():
    for category_key, model_dir in MODEL_PATHS.items():
        if not os.path.exists(model_dir):
            print(f"📁 Model directory {model_dir} not found. Downloading...")
            download_and_extract_model(GDRIVE_MODEL_IDS[category_key], model_dir)

        model = ViTForImageClassification.from_pretrained(model_dir, local_files_only=True)
        processor = ViTImageProcessor.from_pretrained(model_dir, local_files_only=True)
        model.config.id2label = LABEL_MAPS[category_key]
        model.config.label2id = {v: k for k, v in LABEL_MAPS[category_key].items()}
        model.eval()

        models[category_key] = model
        processors[category_key] = processor

load_models()

# === Attention rollout for localization ===
def compute_localization_boxes(model, inputs, threshold=0.6):
    with torch.no_grad():
        outputs = model.vit(
            pixel_values=inputs["pixel_values"],
            output_attentions=True,
            return_dict=True
        )
        attentions = outputs.attentions

    attn_weights = [att.mean(dim=1) for att in attentions]
    rollout = attn_weights[0][0]
    for attn in attn_weights[1:]:
        rollout = attn[0] @ rollout

    mask = rollout[0, 1:]  # Exclude CLS token
    mask = mask.reshape(14, 14).cpu().numpy()
    mask = (mask - mask.min()) / (mask.max() - mask.min())
    mask = cv2.resize(mask, (224, 224))

    binary_map = (mask > threshold).astype(np.uint8) * 255
    contours, _ = cv2.findContours(binary_map, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    boxes = []
    for cnt in contours:
        x, y, w, h = cv2.boundingRect(cnt)
        if w * h > 20:  # Ignore tiny noise
            boxes.append({
                "x": int(x),
                "y": int(y),
                "width": int(w),
                "height": int(h)
            })
    return boxes

# === Prediction Function ===
def predict(category, image_bytes):
    normalized_category = CATEGORY_MAP.get(category.lower())
    if not normalized_category or normalized_category not in models:
        raise ValueError(f"Unsupported category: {category}")

    model = models[normalized_category]
    processor = processors[normalized_category]
    labels = model.config.id2label

    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image_resized = image.resize((224, 224))
    inputs = processor(images=image_resized, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.nn.functional.softmax(outputs.logits, dim=1)
        confidence, predicted_class = torch.max(probs, dim=1)

    label = labels[predicted_class.item()]
    localization = compute_localization_boxes(model, inputs)

    return {
        "predicted_class": label,
        "confidence": round(confidence.item(), 4),
        "category": normalized_category,
        "localization": localization
    }
