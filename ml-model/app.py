from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from PIL import Image
from utils import detect_single_image
import logging

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Allow cross-origin requests with credentials

model = ConvAutoencoder()
checkpoint = torch.load("autoencoder_checkpoint_full.pth", map_location="cpu")
model.load_state_dict(checkpoint["model_state_dict"])
model.eval()

logging.basicConfig(level=logging.DEBUG)

@app.route('/predict', methods=['POST'])
def predict():
    print("➡️ /predict endpoint hit")
    
    if 'image' not in request.files:
        print("❌ No image in request.files")
        return jsonify({'error': 'No image provided'}), 400

    image = request.files['image']
    print(f"📷 Received image: {image.filename}")

    try:
        # Save image temporarily and use the detect_single_image function
        image_path = f"temp_{image.filename}"
        image.save(image_path)

        threshold = 0.009782504290342331  # Define your threshold for anomaly detection
        is_anomalous, error = detect_single_image(model, image_path, threshold)

        print(f"Anomaly Detected: {is_anomalous}, Error: {error}")
        
        return jsonify({'is_anomalous': is_anomalous, 'error': error})

    except Exception as e:
        print("🔥 Exception occurred:", e)
        return jsonify({'error': str(e)}), 500

@app.route("/", methods=["GET"])
def home():
    return "🚀 Anomaly Detection API is up and running!"

if __name__ == "__main__":
    app.run(debug=False, port=5001)
