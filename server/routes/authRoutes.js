// const express = require("express");
// const router = express.Router();
// const { test, registerUser, loginUser, getProfile, uploadImage } = require("../controllers/authController");
// const upload = require("../utils/multer");

// // Authentication Routes
// router.get("/", test);
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/profile", getProfile);

// // Image Upload Route
// router.post("/upload", upload.single("image"), uploadImage);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  uploadImage,
} = require("../controllers/authController");
const upload = require("../utils/multer");

// Authentication Routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Make sure "token" matches the cookie name you used in login
  res.status(200).json({ message: "Logged out successfully" });
});

// Image Upload Route
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
