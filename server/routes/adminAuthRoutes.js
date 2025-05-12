// // // routes/adminRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const { registerAdmin, loginAdmin, getAdminProfile } = require('../controllers/adminAuthController');

// // // Admin routes
// // router.post('/register', registerAdmin); // Admin registration
// // router.post('/login', loginAdmin); // Admin login
// // router.get('/profile', getAdminProfile); // Get Admin profile

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const { registerAdmin, loginAdmin, getAdminProfile, getAllUsers, getUserHistory  } = require("../controllers/adminAuthController");
// //const { getAllUsers, getUserHistory } = require("../controllers/adminController");

// router.get("/users", getAllUsers);
// router.get("/user/:id/history", getUserHistory);

// router.post("/register", registerAdmin);
// router.post("/login", loginAdmin);
// router.get("/profile", getAdminProfile);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getAllUsers,
  getUserHistory
} = require("../controllers/adminAuthController");

// Admin management routes
router.get("/users", getAllUsers);
router.get("/user/:id/history", getUserHistory);

// Admin auth routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", getAdminProfile);

// Admin logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Match this name with the one set in admin login
  res.status(200).json({ message: "Admin logged out successfully" });
});

module.exports = router;
