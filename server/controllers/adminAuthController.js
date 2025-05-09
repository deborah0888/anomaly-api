// // controllers/adminAuthController.js
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const AdminUser = require("../models/adminUser");
// const { comparePassword, hashPassword } = require("../utils/auth");

// // Admin registration
// const registerAdmin = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existingAdmin = await AdminUser.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ error: "Email already in use" });
//     }

//     const hashedPassword = await hashPassword(password);
//     const newAdmin = new AdminUser({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     await newAdmin.save();

//     // Generate JWT token for the admin
//     const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .cookie("token", token, { httpOnly: true, sameSite: "strict" })
//       .status(201)
//       .json({
//         success: true,
//         admin: {
//           id: newAdmin._id,
//           name: newAdmin.name,
//           email: newAdmin.email,
//         },
//         token,
//       });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Admin login
// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required!" });
//     }

//     const admin = await AdminUser.findOne({ email });
//     if (!admin || !(await comparePassword(password, admin.password))) {
//       return res.status(400).json({ error: "Invalid email or password!" });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
//       success: true,
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//       },
//       token,
//     });
//   } catch (error) {
//     console.error("❌ Login Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get Admin Profile
// const getAdminProfile = async (req, res) => {
//   const { token } = req.cookies;
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(403).json({ error: "Invalid token" });

//     const admin = await AdminUser.findById(decoded.id).select("-password");
//     if (!admin) return res.status(404).json({ error: "Admin not found" });

//     res.json(admin);
//   });
// };

// module.exports = {
//   registerAdmin,
//   loginAdmin,
//   getAdminProfile,
// };
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin"); // Create this model similar to User
const { comparePassword, hashPassword } = require("../utils/auth");

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await hashPassword(password);
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    const token = jwt.sign({ id: newAdmin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("adminToken", token, { httpOnly: true, sameSite: "strict" }).status(201).json({
      success: true,
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
      },
      token,
    });
  } catch (err) {
    console.error("❌ Admin Registration Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required!" });

    const admin = await Admin.findOne({ email });
    if (!admin || !(await comparePassword(password, admin.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("adminToken", token, { httpOnly: true, sameSite: "strict" }).json({
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      token,
    });
  } catch (err) {
    console.error("❌ Admin Login Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAdminProfile = async (req, res) => {
  const { adminToken } = req.cookies;
  if (!adminToken) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(adminToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (err || decoded.role !== "admin") return res.status(403).json({ error: "Invalid token" });

    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) return res.status(404).json({ error: "Admin not found" });

    res.json(admin);
  });
};
const User = require("../models/user");

// Get all users (basic info)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name email"); // exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Get image history of a single user
const getUserHistory = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId, "name email images");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ name: user.name, email: user.email, images: user.images });
  } catch (err) {
    res.status(500).json({ error: "Error fetching user history" });
  }
};

//module.exports = { getAllUsers, getUserHistory };

module.exports = {
  getAllUsers,
  getUserHistory,
  registerAdmin,
  loginAdmin,
  getAdminProfile,
};
