// // routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// const { registerAdmin, loginAdmin, getAdminProfile } = require('../controllers/adminAuthController');

// // Admin routes
// router.post('/register', registerAdmin); // Admin registration
// router.post('/login', loginAdmin); // Admin login
// router.get('/profile', getAdminProfile); // Get Admin profile

// module.exports = router;
const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin, getAdminProfile } = require("../controllers/adminAuthController");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", getAdminProfile);

module.exports = router;
