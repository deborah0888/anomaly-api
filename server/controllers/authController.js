// // // // const jwt = require("jsonwebtoken");
// // // // const bcrypt = require("bcryptjs");
// // // // const User = require("../models/user");
// // // // const { comparePassword, hashPassword } = require("../utils/auth");
// // // // //const cloudinary = require("cloudinary").v2;
// // // // const streamifier = require("streamifier");
// // // // const fs = require("fs");
// // // // const path = require("path");
// // // // const FormData = require("form-data");
// // // // const axios = require("axios");

// // // // // Test Route
// // // // const test = (req, res) => {
// // // //   res.json({ message: "✅ Auth route is working!" });
// // // // };

// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;
// // // //     if (!name || !email || !password) {
// // // //       return res.status(400).json({ error: "All fields are required" });
// // // //     }

// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       return res.status(400).json({ error: "Email already in use" });
// // // //     }

// // // //     const hashedPassword = await hashPassword(password);
// // // //     const newUser = new User({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //       imageUrl: "",
// // // //     });
// // // //     await newUser.save();

// // // //     // ✅ Generate JWT after registration
// // // //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
// // // //       expiresIn: "7d",
// // // //     });

// // // //     res
// // // //       .cookie("token", token, { httpOnly: true, sameSite: "strict" })
// // // //       .status(201)
// // // //       .json({
// // // //         success: true,
// // // //         user: {
// // // //           id: newUser._id,
// // // //           name: newUser.name,
// // // //           email: newUser.email,
// // // //           imageUrl: newUser.imageUrl,
// // // //         },
// // // //         token,
// // // //       });
// // // //   } catch (error) {
// // // //     console.error("❌ Registration Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // const loginUser = async (req, res) => {
// // // //   try {
// // // //     console.log("🛠️ Login Request Body:", req.body); // 🔍 Log this

// // // //     const { email, password } = req.body;
// // // //     if (!email || !password) {
// // // //       return res
// // // //         .status(400)
// // // //         .json({ error: "Email and password are required!" });
// // // //     }

// // // //     const user = await User.findOne({ email });
// // // //     if (!user || !(await comparePassword(password, user.password))) {
// // // //       return res.status(400).json({ error: "Invalid email or password!" });
// // // //     }

// // // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // //       expiresIn: "7d",
// // // //     });

// // // //     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
// // // //       success: true,
// // // //       user: {
// // // //         id: user._id,
// // // //         name: user.name,
// // // //         email: user.email,
// // // //         imageUrl: user.imageUrl,
// // // //       },
// // // //       token,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("❌ Login Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // const getProfile = async (req, res) => {
// // // //   console.log("🔍 Cookies received:", req.cookies);

// // // //   const { token } = req.cookies;

// // // //   if (!token) {
// // // //     console.log("❌ No token found in cookies.");
// // // //     return res.status(401).json({ error: "Unauthorized" });
// // // //   }

// // // //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// // // //     if (err) {
// // // //       console.log("❌ Token verification failed:", err.message);
// // // //       return res.status(403).json({ error: "Invalid token" });
// // // //     }

// // // //     console.log("✅ Token decoded successfully:", decoded);

// // // //     try {
// // // //       const user = await User.findById(decoded.id).select("-password");

// // // //       if (!user) {
// // // //         console.log("❌ User not found with ID:", decoded.id);
// // // //         return res.status(404).json({ error: "User not found" });
// // // //       }

// // // //       console.log("✅ User found:", user._id);
// // // //       res.json(user);
// // // //     } catch (err) {
// // // //       console.log("❌ Error fetching user from DB:", err.message);
// // // //       res.status(500).json({ error: "Failed to fetch user profile" });
// // // //     }
// // // //   });
// // // // };

// // // // // // // const uploadImage = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { userId } = req.body;

// // // // // // //     if (!req.file) {
// // // // // // //       console.log("❌ No file uploaded");
// // // // // // //       return res.status(400).json({ error: "No file uploaded" });
// // // // // // //     }

// // // // // // //     const imagePath = req.file.path;
// // // // // // //     const imageStream = fs.createReadStream(imagePath);

// // // // // // //     const formData = new FormData();
// // // // // // //     formData.append("file", imageStream);

// // // // // // //     // Send image to Flask server for prediction
// // // // // // //     const flaskRes = await axios.post(
// // // // // // //       "http://localhost:5001/predict",
// // // // // // //       formData,
// // // // // // //       {
// // // // // // //         headers: formData.getHeaders(),
// // // // // // //       }
// // // // // // //     );

// // // // // // //     const { is_anomalous, error } = flaskRes.data;

// // // // // // //     const newImageEntry = {
// // // // // // //       imageUrl: `/uploads/${req.file.filename}`,
// // // // // // //       anomalyScore: error,
// // // // // // //       isAnomalous: is_anomalous,
// // // // // // //       uploadedAt: new Date(),
// // // // // // //     };

// // // // // // //     // Update the user's image array in MongoDB
// // // // // // //     const user = await User.findByIdAndUpdate(
// // // // // // //       userId,
// // // // // // //       { $push: { images: newImageEntry } },
// // // // // // //       { new: true }
// // // // // // //     ).select("-password");

// // // // // // //     // ✅ Debug logs
// // // // // // //     console.log("🧠 Flask Response:", flaskRes.data);
// // // // // // //     console.log("🖼️ New Image Entry:", newImageEntry);
// // // // // // //     console.log("📥 Updating User ID:", userId);
// // // // // // //     console.log("📦 Updated User Images:", user.images);

// // // // // // //     res.status(200).json({
// // // // // // //       is_anomalous,
// // // // // // //       error,
// // // // // // //       imageUrl: newImageEntry.imageUrl,
// // // // // // //       mongo_save: true,
// // // // // // //       user, // Include updated user object
// // // // // // //     });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("❌ Upload Error:", err.message);
// // // // // // //     res.status(500).json({ error: "Image upload failed" });
// // // // // // //   }
// // // // // // // };
// // // // // // const uploadImage = async (req, res) => {
// // // // // //   try {
// // // // // //     const { userId } = req.body;
// // // // // //     const gfs = getGfs();

// // // // // //     if (!req.file) {
// // // // // //       console.log("❌ No file uploaded");
// // // // // //       return res.status(400).json({ error: "No file uploaded" });
// // // // // //     }

// // // // // //     // Send image to Flask server for prediction
// // // // // //     const readStream = gfs.createReadStream({ _id: req.file.id });
// // // // // //     const formData = new FormData();
// // // // // //     formData.append("file", readStream);

// // // // // //     const flaskRes = await axios.post(
// // // // // //       "http://localhost:5001/predict",
// // // // // //       formData,
// // // // // //       {
// // // // // //         headers: formData.getHeaders(),
// // // // // //       }
// // // // // //     );

// // // // // //     const { is_anomalous, error } = flaskRes.data;

// // // // // //     const newImageEntry = {
// // // // // //       imageId: req.file.id,
// // // // // //       filename: req.file.filename,
// // // // // //       anomalyScore: error,
// // // // // //       isAnomalous: is_anomalous,
// // // // // //       uploadedAt: new Date(),
// // // // // //     };

// // // // // //     const user = await User.findByIdAndUpdate(
// // // // // //       userId,
// // // // // //       { $push: { images: newImageEntry } },
// // // // // //       { new: true }
// // // // // //     ).select("-password");

// // // // // //     res.status(200).json({
// // // // // //       is_anomalous,
// // // // // //       error,
// // // // // //       imageId: req.file.id,
// // // // // //       mongo_save: true,
// // // // // //       user,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("❌ Upload Error:", err.message);
// // // // // //     res.status(500).json({ error: "Image upload failed" });
// // // // // //   }
// // // // // // };
// // // // // const uploadImage = async (req, res) => {
// // // // //   try {
// // // // //     const { userId } = req.body;
// // // // //     const gfs = getGfs(); // Ensure getGfs is imported and works

// // // // //     if (!req.file) {
// // // // //       console.log("❌ No file uploaded");
// // // // //       return res.status(400).json({ error: "No file uploaded" });
// // // // //     }

// // // // //     // Send image to Flask server for prediction
// // // // //     const readStream = gfs.createReadStream({ _id: req.file.id });
// // // // //     const formData = new FormData();
// // // // //     formData.append("file", readStream);

// // // // //     const flaskRes = await axios.post(
// // // // //       "http://localhost:5001/predict",
// // // // //       formData,
// // // // //       {
// // // // //         headers: formData.getHeaders(),
// // // // //       }
// // // // //     );

// // // // //     const { is_anomalous, error } = flaskRes.data;

// // // // //     const newImageEntry = {
// // // // //       imageId: req.file.id,
// // // // //       filename: req.file.filename,
// // // // //       anomalyScore: error,
// // // // //       isAnomalous: is_anomalous,
// // // // //       uploadedAt: new Date(),
// // // // //     };

// // // // //     const user = await User.findByIdAndUpdate(
// // // // //       userId,
// // // // //       { $push: { images: newImageEntry } },
// // // // //       { new: true }
// // // // //     ).select("-password");

// // // // //     // ✅ Log the save
// // // // //     console.log("✅ Image prediction saved to MongoDB for user:", userId);
// // // // //     console.log("📄 Saved Entry:", newImageEntry);
// // // // //     console.log("👤 User has total images:", user.images.length);

// // // // //     res.status(200).json({
// // // // //       is_anomalous,
// // // // //       error,
// // // // //       imageId: req.file.id,
// // // // //       mongo_save: true,
// // // // //       user,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     console.error("❌ Upload Error:", err.message);
// // // // //     res.status(500).json({ error: "Image upload failed" });
// // // // //   }
// // // // // };
// // // // const uploadImage = async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.body;
// // // //     const gfs = getGfs(); // Ensure getGfs is imported and works

// // // //     if (!req.file) {
// // // //       console.log("❌ No file uploaded");
// // // //       return res.status(400).json({ error: "No file uploaded" });
// // // //     }

// // // //     // Send image to Flask server for prediction
// // // //     const readStream = gfs.createReadStream({ _id: req.file.id });
// // // //     const formData = new FormData();
// // // //     formData.append("file", readStream);

// // // //     const flaskRes = await axios.post(
// // // //       "http://localhost:5001/predict",
// // // //       formData,
// // // //       {
// // // //         headers: formData.getHeaders(),
// // // //       }
// // // //     );

// // // //     const { is_anomalous, error } = flaskRes.data;

// // // //     const newImageEntry = {
// // // //       imageId: req.file.id,
// // // //       filename: req.file.filename,
// // // //       anomalyScore: error,
// // // //       isAnomalous: is_anomalous,
// // // //       uploadedAt: new Date(),
// // // //     };

// // // //     const user = await User.findByIdAndUpdate(
// // // //       userId,
// // // //       { $push: { images: newImageEntry } },
// // // //       { new: true }
// // // //     ).select("-password");

// // // //     // ✅ Log the save
// // // //     console.log("✅ Image prediction saved to MongoDB for user:", userId);
// // // //     console.log("📄 Saved Entry:", newImageEntry);
// // // //     console.log("👤 User has total images:", user.images.length);

// // // //     res.status(200).json({
// // // //       is_anomalous,
// // // //       error,
// // // //       imageId: req.file.id,
// // // //       mongo_save: true,
// // // //       user,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("❌ Upload Error:", err.message);
// // // //     res.status(500).json({ error: "Image upload failed" });
// // // //   }
// // // // };

// // // // module.exports = {
// // // //   uploadImage,
// // // //   test,
// // // //   registerUser,
// // // //   loginUser,
// // // //   getProfile,
// // // // };
// // // const jwt = require("jsonwebtoken");
// // // const bcrypt = require("bcryptjs");
// // // const mongoose = require("mongoose");
// // // const User = require("../models/user");
// // // const { comparePassword, hashPassword } = require("../utils/auth");
// // // const { getGfs } = require("../utils/gridfs");
// // // const FormData = require("form-data");
// // // const axios = require("axios");

// // // // ✅ Test Route
// // // const test = (req, res) => {
// // //   res.json({ message: "✅ Auth route is working!" });
// // // };

// // // // ✅ User Registration
// // // const registerUser = async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;
// // //     if (!name || !email || !password) {
// // //       return res.status(400).json({ error: "All fields are required" });
// // //     }

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ error: "Email already in use" });
// // //     }

// // //     const hashedPassword = await hashPassword(password);
// // //     const newUser = new User({
// // //       name,
// // //       email,
// // //       password: hashedPassword,
// // //       imageUrl: "",
// // //     });
// // //     await newUser.save();

// // //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
// // //       expiresIn: "7d",
// // //     });

// // //     res
// // //       .cookie("token", token, { httpOnly: true, sameSite: "strict" })
// // //       .status(201)
// // //       .json({
// // //         success: true,
// // //         user: {
// // //           id: newUser._id,
// // //           name: newUser.name,
// // //           email: newUser.email,
// // //           imageUrl: newUser.imageUrl,
// // //         },
// // //         token,
// // //       });
// // //   } catch (error) {
// // //     console.error("❌ Registration Error:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // };

// // // // ✅ User Login
// // // const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     if (!email || !password) {
// // //       return res.status(400).json({ error: "Email and password are required!" });
// // //     }

// // //     const user = await User.findOne({ email });
// // //     if (!user || !(await comparePassword(password, user.password))) {
// // //       return res.status(400).json({ error: "Invalid email or password!" });
// // //     }

// // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // //       expiresIn: "7d",
// // //     });

// // //     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
// // //       success: true,
// // //       user: {
// // //         id: user._id,
// // //         name: user.name,
// // //         email: user.email,
// // //         imageUrl: user.imageUrl,
// // //       },
// // //       token,
// // //     });
// // //   } catch (error) {
// // //     console.error("❌ Login Error:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // };

// // // // ✅ Get User Profile
// // // const getProfile = async (req, res) => {
// // //   const { token } = req.cookies;

// // //   if (!token) {
// // //     return res.status(401).json({ error: "Unauthorized" });
// // //   }

// // //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// // //     if (err) {
// // //       return res.status(403).json({ error: "Invalid token" });
// // //     }

// // //     try {
// // //       const user = await User.findById(decoded.id).select("-password");

// // //       if (!user) {
// // //         return res.status(404).json({ error: "User not found" });
// // //       }

// // //       res.json(user);
// // //     } catch (err) {
// // //       res.status(500).json({ error: "Failed to fetch user profile" });
// // //     }
// // //   });
// // // };

// // // // ✅ Upload Image + Predict Anomaly + Save to MongoDB
// // // const uploadImage = async (req, res) => {
// // //   console.log("⬆️ Upload request received");

// // //   try {
// // //     const { userId, category } = req.body;
// // //     const gfs = getGfs();

// // //     if (!req.file) {
// // //       return res.status(400).json({ error: "No file uploaded" });
// // //     }

// // //     if (!userId || !category) {
// // //       return res.status(400).json({ error: "userId and category are required" });
// // //     }

// // //     if (!mongoose.Types.ObjectId.isValid(userId)) {
// // //       return res.status(400).json({ error: "Invalid userId format" });
// // //     }

// // //     const userExists = await User.findById(userId);
// // //     if (!userExists) {
// // //       return res.status(404).json({ error: "User not found" });
// // //     }

// // //     const readStream = gfs.createReadStream({ _id: req.file.id });
// // //     const formData = new FormData();
// // //     formData.append("file", readStream);

// // //     const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
// // //       headers: formData.getHeaders(),
// // //     });

// // //     const { is_anomalous, error } = flaskRes.data;

// // //     const newImageEntry = {
// // //       imageId: req.file.id,
// // //       filename: req.file.filename,
// // //       category,
// // //       anomalyScore: error,
// // //       isAnomalous: is_anomalous,
// // //       uploadedAt: new Date(),
// // //       metadata: req.file.metadata || {},
// // //     };

// // //     const user = await User.findByIdAndUpdate(
// // //       userId,
// // //       { $push: { images: newImageEntry } },
// // //       { new: true, upsert: false }
// // //     ).select("-password");

// // //     res.status(200).json({
// // //       success: true,
// // //       imageId: req.file.id,
// // //       imageUrl: `/api/image/${req.file.id}`,
// // //       is_anomalous,
// // //       error,
// // //       user: {
// // //         id: user._id,
// // //         imageCount: user.images.length,
// // //       },
// // //     });

// // //   } catch (err) {
// // //     console.error("❌ Upload Error:", err.message);
// // //     res.status(500).json({ error: "Image upload failed" });
// // //   }
// // // };

// // // module.exports = {
// // //   test,
// // //   registerUser,
// // //   loginUser,
// // //   getProfile,
// // //   uploadImage,
// // // };
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require("bcryptjs");
// // const fs = require("fs");
// // const path = require("path");
// // const axios = require("axios");
// // const FormData = require("form-data");
// // const User = require("../models/user");
// // const { comparePassword, hashPassword } = require("../utils/auth");

// // // ✅ Test Route
// // const test = (req, res) => {
// //   res.json({ message: "✅ Auth route is working!" });
// // };

// // // ✅ Register
// // const registerUser = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;
// //     if (!name || !email || !password)
// //       return res.status(400).json({ error: "All fields are required" });

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ error: "Email already exists" });

// //     const hashedPassword = await hashPassword(password);
// //     const user = await User.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       imageUrl: "",
// //     });

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "7d",
// //     });

// //     res.cookie("token", token, { httpOnly: true }).status(201).json({
// //       success: true,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         imageUrl: user.imageUrl,
// //       },
// //       token,
// //     });
// //   } catch (err) {
// //     console.error("❌ Registration error:", err);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // };

// // // ✅ Login
// // const loginUser = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     if (!email || !password)
// //       return res.status(400).json({ error: "Email and password required" });

// //     const user = await User.findOne({ email });
// //     if (!user || !(await comparePassword(password, user.password))) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "7d",
// //     });

// //     res.cookie("token", token, { httpOnly: true }).json({
// //       success: true,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         imageUrl: user.imageUrl,
// //       },
// //       token,
// //     });
// //   } catch (err) {
// //     console.error("❌ Login error:", err);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // };

// // // ✅ Get Profile
// // // const getProfile = async (req, res) => {
// // //   const { token } = req.cookies;
// // //   if (!token) return res.status(401).json({ error: "Unauthorized" });

// // //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// // //     if (err) return res.status(403).json({ error: "Invalid token" });

// // //     try {
// // //       const user = await User.findById(decoded.id).select("-password");
// // //       if (!user) return res.status(404).json({ error: "User not found" });

// // //       res.json(user);
// // //     } catch (err) {
// // //       res.status(500).json({ error: "Profile fetch failed" });
// // //     }
// // //   });
// // // };
// // const getProfile = async (req, res) => {
// //   console.log("🔍 Cookies received:", req.cookies);

// //   const { token } = req.cookies;

// //   if (!token) {
// //     console.log("❌ No token found in cookies.");
// //     return res.status(401).json({ error: "Unauthorized" });
// //   }

// //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// //     if (err) {
// //       console.log("❌ Token verification failed:", err.message);
// //       return res.status(403).json({ error: "Invalid token" });
// //     }

// //     console.log("✅ Token decoded successfully:", decoded);

// //     try {
// //       const user = await User.findById(decoded.id).select("-password");

// //       if (!user) {
// //         console.log("❌ User not found with ID:", decoded.id);
// //         return res.status(404).json({ error: "User not found" });
// //       }

// //       console.log("✅ User found:", user._id);
// //       res.json(user);
// //     } catch (err) {
// //       console.log("❌ Error fetching user from DB:", err.message);
// //       res.status(500).json({ error: "Failed to fetch user profile" });
// //     }
// //   });
// // };

// // // ✅ Upload image locally + call Flask + update user.images[]
// // const uploadImage = async (req, res) => {
// //   try {
// //     const { userId, category } = req.body;
// //     if (!req.file) return res.status(400).json({ error: "No file uploaded" });
// //     if (!userId || !category)
// //       return res.status(400).json({ error: "userId and category are required" });

// //     const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

// //     // Send file to Flask
// //     const formData = new FormData();
// //     formData.append("file", fs.createReadStream(filePath));

// //     const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
// //       headers: formData.getHeaders(),
// //     });

// //     const { is_anomalous, error } = flaskRes.data;

// //     // Update user with image info
// //     const newImageEntry = {
// //       imagePath: `/uploads/${req.file.filename}`,
// //       category,
// //       anomalyScore: error,
// //       isAnomalous: is_anomalous,
// //       uploadedAt: new Date(),
// //     };

// //     const updatedUser = await User.findByIdAndUpdate(
// //       userId,
// //       { $push: { images: newImageEntry } },
// //       { new: true }
// //     ).select("-password");

// //     res.status(200).json({
// //       success: true,
// //       fileUrl: `/uploads/${req.file.filename}`,
// //       is_anomalous,
// //       error,
// //       user: {
// //         id: updatedUser._id,
// //         imageCount: updatedUser.images.length,
// //       },
// //     });
// //   } catch (err) {
// //     console.error("❌ Upload error:", err.message);
// //     res.status(500).json({ error: "Upload failed" });
// //   }
// // };

// // module.exports = {
// //   test,
// //   registerUser,
// //   loginUser,
// //   getProfile,
// //   uploadImage,
// // };
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const fs = require("fs");
// const path = require("path");
// const axios = require("axios");
// const FormData = require("form-data");
// const User = require("../models/user");
// const { comparePassword, hashPassword } = require("../utils/auth");

// // ✅ Test route
// const test = (req, res) => {
//   res.json({ message: "✅ Auth route is working!" });
// };

// // ✅ Register user
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password)
//       return res.status(400).json({ error: "All fields are required" });

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ error: "Email already in use" });

//     const hashedPassword = await hashPassword(password);
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       imageUrl: "",
//     });

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .cookie("token", token, { httpOnly: true, sameSite: "strict" })
//       .status(201)
//       .json({
//         success: true,
//         user: {
//           id: newUser._id,
//           name: newUser.name,
//           email: newUser.email,
//           imageUrl: newUser.imageUrl,
//         },
//         token,
//       });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Login user
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.status(400).json({ error: "Email and password required" });

//     const user = await User.findOne({ email });
//     if (!user || !(await comparePassword(password, user.password)))
//       return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .cookie("token", token, { httpOnly: true, sameSite: "strict" })
//       .json({
//         success: true,
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           imageUrl: user.imageUrl,
//         },
//         token,
//       });
//   } catch (error) {
//     console.error("❌ Login Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Get profile
// const getProfile = async (req, res) => {
//   const { token } = req.cookies;
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(403).json({ error: "Invalid token" });

//     try {
//       const user = await User.findById(decoded.id).select("-password");
//       if (!user) return res.status(404).json({ error: "User not found" });

//       res.json(user);
//     } catch (err) {
//       console.error("❌ Error fetching profile:", err);
//       res.status(500).json({ error: "Failed to fetch user profile" });
//     }
//   });
// };

// // ✅ Upload image
// const uploadImage = async (req, res) => {
//   try {
//     const { userId, category } = req.body;
//     if (!req.file) return res.status(400).json({ error: "No file uploaded" });
//     if (!category) return res.status(400).json({ error: "Category required" });

//     const imagePath = req.file.path;
//     const imageStream = fs.createReadStream(imagePath);

//     const formData = new FormData();
//     formData.append("image", imageStream);
//     formData.append("category", category);

//     const flaskRes = await axios.post(
//       "http://localhost:5001/predict",
//       formData,
//       { headers: formData.getHeaders() }
//     );

//     const { is_anomalous, error } = flaskRes.data;
//     const newImageEntry = {
//       imageUrl: `/uploads/${req.file.filename}`,
//       anomalyScore: error,
//       isAnomalous: is_anomalous,
//       uploadedAt: new Date(),
//     };

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { $push: { images: newImageEntry } },
//       { new: true }
//     ).select("-password");

//     res.status(200).json({
//       is_anomalous,
//       error,
//       imageUrl: newImageEntry.imageUrl,
//       mongo_save: true,
//       user,
//     });
//   } catch (err) {
//     console.error("❌ Upload Error:", err.message);
//     res.status(500).json({ error: "Image upload failed" });
//   }
// };

// module.exports = {
//   test,
//   registerUser,
//   loginUser,
//   getProfile,
//   uploadImage,
// };
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const FormData = require("form-data");
const User = require("../models/user");
const { comparePassword, hashPassword } = require("../utils/auth");

// ✅ Test route
const test = (req, res) => {
  res.json({ message: "✅ Auth route is working!" });
};

// ✅ Register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already in use" });

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      imageUrl: "",
    });

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

// ✅ Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password)))
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "strict" })
      .json({
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

// ✅ Get profile (with inline token verification)
const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    try {
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(404).json({ error: "User not found" });

      res.json(user);
    } catch (err) {
      console.error("❌ Error fetching profile:", err);
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  });
};

// // // // // // ✅ Upload image (with inline token verification)

// // // // // // const uploadImage = async (req, res) => {
// // // // // //   const { token } = req.cookies;
// // // // // //   if (!token) return res.status(401).json({ error: "Unauthorized" });

// // // // // //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// // // // // //     if (err) return res.status(403).json({ error: "Invalid token" });

// // // // // //     try {
// // // // // //       const userId = decoded.id;
// // // // // //       const { category } = req.body;

// // // // // //       if (!req.file) return res.status(400).json({ error: "No file uploaded" });
// // // // // //       if (!category) return res.status(400).json({ error: "Category required" });

// // // // // //       const imagePath = req.file.path;
// // // // // //       const imageStream = fs.createReadStream(imagePath);

// // // // // //       const formData = new FormData();
// // // // // //       formData.append("image", imageStream);
// // // // // //       formData.append("category", category);

// // // // // //       const flaskRes = await axios.post(
// // // // // //         "http://localhost:5001/predict",
// // // // // //         formData,
// // // // // //         { headers: formData.getHeaders() }
// // // // // //       );

// // // // // //       const { is_anomalous, error } = flaskRes.data;
// // // // // //       const newImageEntry = {
// // // // // //         imageUrl: `/uploads/${req.file.filename}`,
// // // // // //         anomalyScore: error,
// // // // // //         isAnomalous: is_anomalous,
// // // // // //         uploadedAt: new Date(),
// // // // // //       };

// // // // // //       const user = await User.findByIdAndUpdate(
// // // // // //         userId,
// // // // // //         { $push: { images: newImageEntry } },
// // // // // //         { new: true }
// // // // // //       ).select("-password");

// // // // // //       res.status(200).json({
// // // // // //         is_anomalous,
// // // // // //         error,
// // // // // //         imageUrl: newImageEntry.imageUrl,
// // // // // //         mongo_save: true,
// // // // // //         user,
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Upload Error:", err.message);
// // // // // //       res.status(500).json({ error: "Image upload failed" });
// // // // // //     }
// // // // // //   });
// // // // // // };
// // // // // const uploadImage = async (req, res) => {
// // // // //   try {
// // // // //     const { category, userId } = req.body;
// // // // //     const imageBuffer = req.file.buffer;

// // // // //     if (!category || !imageBuffer) {
// // // // //       return res.status(400).json({ error: "Missing category or image" });
// // // // //     }

// // // // //     const formData = new FormData();
// // // // //     formData.append("file", imageBuffer, {
// // // // //       filename: req.file.originalname,
// // // // //       contentType: req.file.mimetype,
// // // // //     });
// // // // //     formData.append("category", category);

// // // // //     const flaskResponse = await axios.post("http://localhost:5001/predict", formData, {
// // // // //       headers: formData.getHeaders(),
// // // // //     });

// // // // //     // You can process or save flaskResponse.data here if needed
// // // // //     res.json(flaskResponse.data);
// // // // //   } catch (error) {
// // // // //     console.error("❌ Error in uploadImage:", error);
// // // // //     res.status(500).json({ error: "Image processing failed", details: error.message });
// // // // //   }
// // // // // };
// // // // // // const uploadImage = async (req, res) => {
// // // // // //   try {
// // // // // //     const { userId, category } = req.body;

// // // // // //     if (!req.file) {
// // // // // //       return res.status(400).json({ error: "No image file uploaded" });
// // // // // //     }
// // // // // //     if (!category) {
// // // // // //       return res.status(400).json({ error: "Category is required" });
// // // // // //     }

// // // // // //     const imagePath = req.file.path; // disk path from multer config
// // // // // //     const imageStream = fs.createReadStream(imagePath);

// // // // // //     const formData = new FormData();
// // // // // //     formData.append("image", imageStream);
// // // // // //     formData.append("category", category);

// // // // // //     // Send image to Flask
// // // // // //     const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
// // // // // //       headers: formData.getHeaders(),
// // // // // //     });

// // // // // //     const { is_anomalous, error } = flaskRes.data;

// // // // // //     // Save in MongoDB
// // // // // //     const newImageEntry = {
// // // // // //       imageUrl: `/uploads/${req.file.filename}`,
// // // // // //       anomalyScore: error,
// // // // // //       isAnomalous: is_anomalous,
// // // // // //       uploadedAt: new Date(),
// // // // // //     };

// // // // // //     const user = await User.findByIdAndUpdate(
// // // // // //       userId,
// // // // // //       { $push: { images: newImageEntry } },
// // // // // //       { new: true }
// // // // // //     ).select("-password");

// // // // // //     res.status(200).json({
// // // // // //       is_anomalous,
// // // // // //       error,
// // // // // //       imageUrl: newImageEntry.imageUrl,
// // // // // //       mongo_save: true,
// // // // // //       user,
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Error in uploadImage:", error.message);
// // // // // //     res.status(500).json({ error: "Image upload failed" });
// // // // // //   }
// // // // // // };
// // // // // const uploadImage = async (req, res) => {
// // // // //   try {
// // // // //       console.log("Req.body:", req.body);
// // // // //     console.log("File:", req.file);

// // // // //     const { userId, category } = req.body;

// // // // //     if (!req.file) {
// // // // //       return res.status(400).json({ error: "No image file uploaded" });
// // // // //     }
// // // // //     if (!category) {
// // // // //       return res.status(400).json({ error: "Category is required" });
// // // // //     }

// // // // //     // req.file.buffer is the image in memory
// // // // //     // req.file.originalname is the filename
// // // // //     // req.file.mimetype is the content-type (like image/jpeg)

// // // // //     const formData = new FormData();
// // // // //     formData.append("image", req.file.buffer, {
// // // // //       filename: req.file.originalname,
// // // // //       contentType: req.file.mimetype,
// // // // //     });
// // // // //     formData.append("category", category);

// // // // //     // Send image to Flask server
// // // // //     const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
// // // // //       headers: formData.getHeaders(),
// // // // //     });

// // // // //     const { is_anomalous, error, defect_class, predicted_class, confidence, localization, imageUrl } = flaskRes.data;

// // // // //     // Save in MongoDB
// // // // //     const newImageEntry = {
// // // // //       imageUrl: imageUrl || "", // or you can build URL if flask returns path
// // // // //       anomalyScore: error,
// // // // //       isAnomalous: is_anomalous,
// // // // //       defectClass: defect_class || null,
// // // // //       predictedClass: predicted_class || null,
// // // // //       confidence: confidence || null,
// // // // //       localization: localization || [],
// // // // //       uploadedAt: new Date(),
// // // // //     };

// // // // //     const user = await User.findByIdAndUpdate(
// // // // //       userId,
// // // // //       { $push: { images: newImageEntry } },
// // // // //       { new: true }
// // // // //     ).select("-password");

// // // // //     res.status(200).json({
// // // // //       ...flaskRes.data,
// // // // //       mongo_save: true,
// // // // //       user,
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Error in uploadImage:", error.message);
// // // // //     res.status(500).json({ error: "Image upload failed", details: error.message });
// // // // //   }
// // // // // };
// // // // const uploadImage = async (req, res) => {
// // // //   try {
// // // //     console.log("Req.body:", req.body);
// // // //     console.log("File:", req.file);

// // // //     const { userId, category } = req.body;

// // // //     if (!req.file) {
// // // //       return res.status(400).json({ error: "No image file uploaded" });
// // // //     }
// // // //     if (!category) {
// // // //       return res.status(400).json({ error: "Category is required" });
// // // //     }

// // // //     const formData = new FormData();

// // // //     // Append buffer with just filename, contentType usually handled by backend Flask
// // // //     formData.append("image", req.file.buffer, req.file.originalname);

// // // //     formData.append("category", category);

// // // //     // Send to Flask
// // // //     const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
// // // //       headers: formData.getHeaders(),
// // // //       maxContentLength: Infinity, // optional, if large files
// // // //       maxBodyLength: Infinity,
// // // //     });

// // // //     const {
// // // //       is_anomalous,
// // // //       error,
// // // //       defect_class,
// // // //       predicted_class,
// // // //       confidence,
// // // //       localization,
// // // //       imageUrl,
// // // //     } = flaskRes.data;

// // // //     // Save in MongoDB
// // // //     const newImageEntry = {
// // // //       imageUrl: imageUrl || "",
// // // //       anomalyScore: error,
// // // //       isAnomalous: is_anomalous,
// // // //       defectClass: defect_class || null,
// // // //       predictedClass: predicted_class || null,
// // // //       confidence: confidence || null,
// // // //       localization: localization || [],
// // // //       uploadedAt: new Date(),
// // // //     };

// // // //     const user = await User.findByIdAndUpdate(
// // // //       userId,
// // // //       { $push: { images: newImageEntry } },
// // // //       { new: true }
// // // //     ).select("-password");

// // // //     res.status(200).json({
// // // //       ...flaskRes.data,
// // // //       mongo_save: true,
// // // //       user,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("❌ Error in uploadImage:", error);
// // // //     res.status(500).json({ error: "Image upload failed", details: error.message });
// // // //   }
// // // // };
// // // const uploadImage = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: "No image file uploaded" });
// // //     }
// // //     if (!req.body.category) {
// // //       return res.status(400).json({ error: "Category not provided" });
// // //     }

// // //     // Prepare form data to send to Flask API
// // //     const formData = new FormData();
// // //     formData.append("file", req.file.buffer, {
// // //       filename: req.file.originalname,
// // //       contentType: req.file.mimetype,
// // //     });
// // //     formData.append("category", req.body.category);

// // //     // Send POST request to Flask API
// // //     const response = await axios.post("http://localhost:5001/predict", formData, {
// // //       headers: {
// // //         ...formData.getHeaders(),
// // //       },
// // //     });

// // //     // Respond back with Flask API prediction result
// // //     res.status(200).json(response.data);
// // //   } catch (error) {
// // //     console.error("Error uploading image:", error.message || error);
// // //     res.status(500).json({ error: "Failed to upload image and get prediction" });
// // //   }
// // // };
// // const uploadImage = async (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ error: "No image file uploaded" });
// //     }
// //     if (!req.body.category) {
// //       return res.status(400).json({ error: "Category not provided" });
// //     }

// //     const uploadsDir = path.join(__dirname, "../uploads");
// //     if (!fs.existsSync(uploadsDir)) {
// //       fs.mkdirSync(uploadsDir, { recursive: true });
// //     }

// //     // Save file buffer to uploads folder
// //     const savedFilePath = path.join(uploadsDir, req.file.originalname);
// //     fs.writeFileSync(savedFilePath, req.file.buffer);

// //     // Prepare form data to send to Flask API (send from saved file)
// //     const formData = new FormData();
// //     formData.append("file", fs.createReadStream(savedFilePath));
// //     formData.append("category", req.body.category);

// //     // Send to Flask API
// //     const response = await axios.post("http://localhost:5001/predict", formData, {
// //       headers: {
// //         ...formData.getHeaders(),
// //       },
// //     });

// //     // Optional: delete file after sending to Flask if you want
// //     // fs.unlinkSync(savedFilePath);

// //     // Send Flask response back to client
// //     res.status(200).json(response.data);
// //   } catch (error) {
// //     console.error("Error uploading image:", error.message || error);
// //     res.status(500).json({ error: "Failed to upload image and get prediction" });
// //   }
// // };
// const uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No image file uploaded" });
//     }
//     if (!req.body.category) {
//       return res.status(400).json({ error: "Category not provided" });
//     }

//     const uploadsDir = path.join(__dirname, "../uploads");
//     if (!fs.existsSync(uploadsDir)) {
//       fs.mkdirSync(uploadsDir, { recursive: true });
//     }

//     // Save file buffer to uploads folder
//     const savedFilePath = path.join(uploadsDir, req.file.originalname);
//     fs.writeFileSync(savedFilePath, req.file.buffer);

//     // Prepare form data to send to Flask API (send from saved file)
//     const formData = new FormData();
//     formData.append("file", fs.createReadStream(savedFilePath));
//     formData.append("category", req.body.category);

//     // Send to Flask API
//     const response = await axios.post("http://localhost:5001/predict", formData, {
//       headers: {
//         ...formData.getHeaders(),
//       },
//     });

//     // Optional: delete file after sending to Flask if you want
//     // fs.unlinkSync(savedFilePath);

//     // Send Flask response back to client
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Error uploading image:", error.message || error);
//     res.status(500).json({ error: "Failed to upload image and get prediction" });
//   }
// };

const uploadImage = async (req, res) => {
  try {
    const { userId, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }
    if (!category) {
      return res.status(400).json({ error: "Category not provided" });
    }
    if (!userId) {
      return res.status(400).json({ error: "User ID not provided" });
    }

    // Ensure uploads folder exists
    const uploadsDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Save file buffer to uploads folder with unique filename
    // Using timestamp to avoid overwrites
    const uniqueFilename = `${Date.now()}_${req.file.originalname}`;
    const savedFilePath = path.join(uploadsDir, uniqueFilename);
    fs.writeFileSync(savedFilePath, req.file.buffer);

    // Prepare form data to send to Flask API
    const formData = new FormData();
    formData.append("file", fs.createReadStream(savedFilePath));
    formData.append("category", category);

    // Send image and category to Flask server
    const flaskRes = await axios.post("http://localhost:5001/predict", formData, {
      headers: formData.getHeaders(),
    });

    const { is_anomalous, error,  confidence, predicted_class } = flaskRes.data;

    // Create new image entry for user document in Mongo
    const newImageEntry = {
      imageUrl: `/uploads/${uniqueFilename}`, // this is relative URL for frontend
      anomalyScore: error,
      isAnomalous: is_anomalous,
      uploadedAt: new Date(),
    };

    // Save image info in user's images array
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { images: newImageEntry } },
      { new: true }
    ).select("-password");

    // Return combined info to client
    res.status(200).json({
      is_anomalous,
      error,
      confidence,
  predicted_class,
      imageUrl: newImageEntry.imageUrl,
      mongo_save: true,
      user,
    });
  } catch (error) {
    console.error("❌ Upload Error:", error.message || error);
    res.status(500).json({ error: "Image upload failed" });
  }
};
// exports.uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     console.log("File received:", req.file.originalname);

//     // send to Flask...
//   } catch (err) {
//     console.error("Upload failed:", err.message);
//     res.status(500).json({ message: "Internal Server Error", error: err.message });
//   }
// };

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  uploadImage,
};
