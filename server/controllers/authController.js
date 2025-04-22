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

// Get User Profile
const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  });
};

const uploadImage = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const imagePath = req.file.path;
    const imageStream = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image", imageStream);

    const flaskRes = await axios.post(
      "http://localhost:5001/predict",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const { is_anomalous, error } = flaskRes.data; // ✅ match your frontend key names

    const user = await User.findByIdAndUpdate(
      userId,
      {
        imageUrl: `/uploads/${req.file.filename}`,
        anomalyScore: error, // Still save this internally if needed
      },
      { new: true }
    ).select("-password");

    res.status(200).json({
      is_anomalous,
      error, // ✅ send this back — frontend expects this name!
      imageUrl: `/uploads/${req.file.filename}`,
      mongo_save: true,
    });
  } catch (err) {
    console.error("❌ Upload Error:", err.message);
    res.status(500).json({ error: "Image upload failed" });
  }
};

 module.exports = { test, registerUser, loginUser, getProfile, uploadImage };
