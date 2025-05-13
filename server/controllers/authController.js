const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { comparePassword, hashPassword } = require("../utils/auth");
//const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");

// Test Route
const test = (req, res) => {
  res.json({ message: "✅ Auth route is working!" });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      imageUrl: "",
    });
    await newUser.save();

    // ✅ Generate JWT after registration
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "strict" })
      .status(201)
      .json({
        success: true,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          imageUrl: newUser.imageUrl,
        },
        token,
      });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log("🛠️ Login Request Body:", req.body); // 🔍 Log this

    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required!" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl,
      },
      token,
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProfile = async (req, res) => {
  console.log("🔍 Cookies received:", req.cookies);

  const { token } = req.cookies;

  if (!token) {
    console.log("❌ No token found in cookies.");
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      console.log("❌ Token verification failed:", err.message);
      return res.status(403).json({ error: "Invalid token" });
    }

    console.log("✅ Token decoded successfully:", decoded);

    try {
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        console.log("❌ User not found with ID:", decoded.id);
        return res.status(404).json({ error: "User not found" });
      }

      console.log("✅ User found:", user._id);
      res.json(user);
    } catch (err) {
      console.log("❌ Error fetching user from DB:", err.message);
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  });
};


const uploadImage = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!req.file) {
      console.log("❌ No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imagePath = req.file.path;
    const imageStream = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image", imageStream);

    // Send image to Flask server for prediction
    const flaskRes = await axios.post(
      "http://localhost:5001/predict",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const { is_anomalous, error } = flaskRes.data;

    const newImageEntry = {
      imageUrl: `/uploads/${req.file.filename}`,
      anomalyScore: error,
      isAnomalous: is_anomalous,
      uploadedAt: new Date(),
    };

    // Update the user's image array in MongoDB
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { images: newImageEntry } },
      { new: true }
    ).select("-password");

    // ✅ Debug logs
    console.log("🧠 Flask Response:", flaskRes.data);
    console.log("🖼️ New Image Entry:", newImageEntry);
    console.log("📥 Updating User ID:", userId);
    console.log("📦 Updated User Images:", user.images);

    res.status(200).json({
      is_anomalous,
      error,
      imageUrl: newImageEntry.imageUrl,
      mongo_save: true,
      user, // Include updated user object
    });
  } catch (err) {
    console.error("❌ Upload Error:", err.message);
    res.status(500).json({ error: "Image upload failed" });
  }
};

module.exports = {
  uploadImage,
  test,
  registerUser,
  loginUser,
  getProfile,
};