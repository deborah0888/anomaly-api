from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from PIL import Image
from model import ConvAutoencoder
from utils import detect_single_image
import logging
import os
import requests
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
        # Save image temporarily
        os.makedirs("temp", exist_ok=True)  # Ensure 'temp' folder exists
        image_path = os.path.join("temp", image.filename)
        image.save(image_path)

        # Anomaly detection
        threshold = 0.009782504290342331
        is_anomalous, error = detect_single_image(model, image_path, threshold)
        print(f"Anomaly Detected: {is_anomalous}, Error: {error}")

        # Send image to Node.js server
        try:
            with open(image_path, 'rb') as f:
                files = {'image': (image.filename, f, 'image/png')}
                response = requests.post("http://localhost:8000/upload", files=files)
                mongo_saved = response.status_code == 200
        except Exception as upload_error:
            print("⚠️ Mongo upload failed:", upload_error)
            mongo_saved = False

        return jsonify({
            'is_anomalous': is_anomalous,
            'error': error,
            'mongo_save': mongo_saved
        })

    except Exception as e:
        print("🔥 Exception occurred:", e)
        return jsonify({'error': str(e)}), 500

@app.route("/", methods=["GET"])
def home():
    return "🚀 Anomaly Detection API is up and running!"

if __name__ == "__main__":
    app.run(debug=False, port=5001)
