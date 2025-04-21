const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const multer = require("multer");
const FormData = require("form-data");

const router = express.Router();
const upload = multer(); // In-memory storage

// Handling the predict route
router.post("/predict", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const form = new FormData();
    form.append("image", req.file.buffer, req.file.originalname);

    // Send the image to the Flask API for prediction
    const response = await fetch("http://localhost:5001/predict", {
      method: "POST",
      body: form,
      headers: form.getHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to send image to the prediction API");
    }

    const data = await response.json();
    res.json(data); // Send the prediction result back to the frontend
  } catch (err) {
    console.error("Error during prediction request:", err);
    res.status(500).json({ error: "Model service error" });
  }
});

module.exports = router;
