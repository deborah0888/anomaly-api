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

CATEGORY_MAP = {
    "screw": "screws",
    "screws": "screws",
    "transistor": "transistors",
    "transistors": "transistors"
}

models = {}
processors = {}

# === Load Models and Processors ===
for category_key, path in MODEL_PATHS.items():
    if not os.path.exists(path):
        raise ValueError(f"Model path not found: {path}")

    model = ViTForImageClassification.from_pretrained(path, local_files_only=True)
    processor = ViTImageProcessor.from_pretrained(path, local_files_only=True)

    # Update model config with labels
    model.config.id2label = LABEL_MAPS[category_key]
    model.config.label2id = {v: k for k, v in LABEL_MAPS[category_key].items()}
    model.eval()

    models[category_key] = model
    processors[category_key] = processor

# === Predict Function ===
def predict(category, image_bytes):
    normalized_category = CATEGORY_MAP.get(category.lower())
    if not normalized_category or normalized_category not in models:
        raise ValueError(f"Unsupported category: {category}")

    model = models[normalized_category]
    processor = processors[normalized_category]
    labels = model.config.id2label

    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    inputs = processor(images=image, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.nn.functional.softmax(outputs.logits, dim=1)
        confidence, predicted_class = torch.max(probs, dim=1)

    label = labels[predicted_class.item()]
    return {
        "predicted_class": label,
        "confidence": round(confidence.item(), 4),
        "category": normalized_category
    }
