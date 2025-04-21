import torch
from torchvision import transforms
from PIL import Image

def detect_single_image(model, image_path, threshold):
    model.eval()

    transform = transforms.Compose([
        transforms.Resize((128, 128)),
        transforms.ToTensor(),
    ])

    # Load and preprocess the image
    image = Image.open(image_path).convert("RGB")
    image_tensor = transform(image).unsqueeze(0).to(next(model.parameters()).device)  # Add batch dim

    # Forward pass and error
    with torch.no_grad():
        reconstruction = model(image_tensor)
        error = torch.abs(reconstruction - image_tensor)
        error = error.view(error.size(0), -1).mean(dim=1).item()  # Scalar

    # Debugging: log the error and reconstructed image
    print(f"Reconstruction Error: {error:.4f}")
    print(f"Reconstruction (first few pixels): {reconstruction.squeeze().cpu().numpy()[:5]}")
    print(f"Original Image (first few pixels): {image_tensor.squeeze().cpu().numpy()[:5]}")

    is_anomalous = error > threshold
    print(f"Anomaly Detected: {is_anomalous}")

    return is_anomalous, error
