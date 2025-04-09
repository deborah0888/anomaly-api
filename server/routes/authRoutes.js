const express = require("express");
const router = express.Router();
const { test, registerUser, loginUser, getProfile, uploadImage } = require("../controllers/authController");
const upload = require("../utils/multer");

// Authentication Routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

// Image Upload Route
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
