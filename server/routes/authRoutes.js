// // // // // // // // // // const express=require('express');
// // // // // // // // // // const router=express.Router();
// // // // // // // // // // const cors=require('cors');
// // // // // // // // // // const {test,registerUser,loginUser,getProfile}=require('../controllers/authController')

// // // // // // // // // // //middleware
// // // // // // // // // // router.use(
// // // // // // // // // //     cors({
// // // // // // // // // //         credentials:true,
// // // // // // // // // //         origin: 'http://localhost:5173'
// // // // // // // // // //     })
// // // // // // // // // // )

// // // // // // // // // // router.get('/',test)
// // // // // // // // // // router.post('/register',registerUser)
// // // // // // // // // // router.post('/login',loginUser)
// // // // // // // // // // router.get('/profile',getProfile)

// // // // // // // // // // module.exports=router
// // // // // // // // // const express = require('express');
// // // // // // // // // const router = express.Router();
// // // // // // // // // const UserModel = require('../models/user'); // Import the User model
// // // // // // // // // const cloudinary = require('cloudinary').v2;
// // // // // // // // // const multer = require('multer');
// // // // // // // // // const bcrypt = require('bcrypt'); // For password hashing

// // // // // // // // // // Configure Multer for file uploads
// // // // // // // // // const upload = multer({ dest: 'uploads/' });

// // // // // // // // // // Register a new user
// // // // // // // // // router.post('/register', upload.single('image'), async (req, res) => {
// // // // // // // // //   const { name, email, password } = req.body;
// // // // // // // // //   const imageFile = req.file; // Uploaded image file

// // // // // // // // //   try {
// // // // // // // // //     // Upload image to Cloudinary
// // // // // // // // //     const result = await cloudinary.uploader.upload(imageFile.path);

// // // // // // // // //     // Hash the password before saving
// // // // // // // // //     const saltRounds = 10;
// // // // // // // // //     const hashedPassword = await bcrypt.hash(password, saltRounds);

// // // // // // // // //     // Create a new user with the image URL
// // // // // // // // //     const newUser = new UserModel({
// // // // // // // // //       name,
// // // // // // // // //       email,
// // // // // // // // //       password: hashedPassword, // Save the hashed password
// // // // // // // // //       image: result.secure_url, // Store the Cloudinary image URL
// // // // // // // // //     });

// // // // // // // // //     // Save the user to the database
// // // // // // // // //     await newUser.save();

// // // // // // // // //     res.status(201).json({ message: 'User registered successfully!', user: newUser });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error(error);
// // // // // // // // //     res.status(500).json({ error: 'Registration failed' });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // Login a user
// // // // // // // // // router.post('/login', async (req, res) => {
// // // // // // // // //   const { email, password } = req.body;

// // // // // // // // //   try {
// // // // // // // // //     // Find the user by email
// // // // // // // // //     const user = await UserModel.findOne({ email });

// // // // // // // // //     if (!user) {
// // // // // // // // //       return res.status(404).json({ error: 'User not found' });
// // // // // // // // //     }

// // // // // // // // //     // Compare passwords
// // // // // // // // //     const isPasswordValid = await bcrypt.compare(password, user.password);
// // // // // // // // //     if (!isPasswordValid) {
// // // // // // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // // // // // //     }

// // // // // // // // //     // Return user data (excluding the password)
// // // // // // // // //     res.status(200).json({
// // // // // // // // //       message: 'Login successful!',
// // // // // // // // //       user: {
// // // // // // // // //         name: user.name,
// // // // // // // // //         email: user.email,
// // // // // // // // //         image: user.image, // Include the image URL in the response
// // // // // // // // //       },
// // // // // // // // //     });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error(error);
// // // // // // // // //     res.status(500).json({ error: 'Login failed' });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // module.exports = router;
// // // // // // // // const express=require('express');
// // // // // // // // const router=express.Router();
// // // // // // // // const cors=require('cors');
// // // // // // // // const {test,registerUser,loginUser,getProfile}=require('../controllers/authController')

// // // // // // // // //middleware
// // // // // // // // router.use(
// // // // // // // //     cors({
// // // // // // // //         credentials:true,
// // // // // // // //         origin: 'http://localhost:5173'
// // // // // // // //     })
// // // // // // // // )

// // // // // // // // router.get('/',test)
// // // // // // // // router.post('/register',registerUser)
// // // // // // // // router.post('/login',loginUser)
// // // // // // // // router.get('/profile',getProfile)

// // // // // // // // module.exports=router
// // // // // // // const express = require('express');
// // // // // // // const router = express.Router();
// // // // // // // const cors = require('cors');
// // // // // // // const { test, registerUser, loginUser, getProfile, uploadImage } = require('../controllers/authController');
// // // // // // // const upload = require('../utils/cloudinary'); // Middleware for handling file uploads

// // // // // // // // Middleware
// // // // // // // router.use(
// // // // // // //   cors({
// // // // // // //     credentials: true,
// // // // // // //     origin: 'http://localhost:5173',
// // // // // // //   })
// // // // // // // );

// // // // // // // // Routes
// // // // // // // router.get('/', test);
// // // // // // // router.post('/register', registerUser);
// // // // // // // router.post('/login', loginUser);
// // // // // // // router.get('/profile', getProfile);
// // // // // // // router.post('/upload', upload.single('image'), uploadImage); // New route for image upload

// // // // // // // module.exports = router;
// // // // // // const express = require('express');
// // // // // // const router = express.Router();
// // // // // // const cors = require('cors');
// // // // // // const { test, registerUser, loginUser, getProfile, uploadImage } = require('../controllers/authController');
// // // // // // const upload = require('../utils/cloudinary'); // Import the upload middleware

// // // // // // // Middleware
// // // // // // router.use(
// // // // // //   cors({
// // // // // //     credentials: true,
// // // // // //     origin: 'http://localhost:5173',
// // // // // //   })
// // // // // // );

// // // // // // // Routes
// // // // // // router.get('/', test);
// // // // // // router.post('/register', registerUser);
// // // // // // router.post('/login', loginUser);
// // // // // // router.get('/profile', getProfile);
// // // // // // router.post('/upload', upload.single('image'), uploadImage); // Use the upload middleware

// // // // // // module.exports = router;
// // // // // const express = require('express');
// // // // // const router = express.Router();
// // // // // const cors = require('cors');
// // // // // const { test, registerUser, loginUser, getProfile, uploadImage } = require('../controllers/authController');
// // // // // const upload = require('../utils/multer'); // Ensure correct import

// // // // // // Middleware
// // // // // router.use(
// // // // //   cors({
// // // // //     credentials: true,
// // // // //     origin: 'http://localhost:5173',
// // // // //   })
// // // // // );

// // // // // // Routes
// // // // // router.get('/', test);
// // // // // router.post('/register', registerUser);
// // // // // router.post('/login', loginUser);
// // // // // router.get('/profile', getProfile);
// // // // // router.post('/upload', upload.single('image'), uploadImage); // Use correct upload middleware

// // // // // module.exports = router;
// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const cors = require('cors');
// // // // const { test, registerUser, loginUser, getProfile, uploadImage } = require('../controllers/authController');
// // // // const upload = require('../utils/multer'); // Ensure correct import

// // // // // Middleware
// // // // router.use(
// // // //   cors({
// // // //     credentials: true,
// // // //     origin: 'http://localhost:5173',
// // // //   })
// // // // );

// // // // // Routes
// // // // router.get('/', test);
// // // // router.post('/register', registerUser);
// // // // router.post('/login', loginUser);
// // // // router.get('/profile', getProfile);
// // // // router.post('/upload', upload.single('image'), uploadImage); // Use correct upload middleware

// // // // module.exports = router;
// // // const express = require('express');
// // // const router = express.Router();
// // // const cors = require('cors');
// // // const { test, registerUser, loginUser, getProfile, uploadImage } = require('../controllers/authController');
// // // const upload = require('../utils/multer'); // Ensure multer is properly imported

// // // // Middleware
// // // router.use(
// // //   cors({
// // //     credentials: true,
// // //     origin: 'http://localhost:5173',
// // //   })
// // // );

// // // // Routes
// // // router.get('/', test);
// // // router.post('/register', registerUser);
// // // router.post('/login', loginUser);
// // // router.get('/profile', getProfile);
// // // router.post('/upload', upload.single('image'), uploadImage); // Correct multer usage

// // // module.exports = router;
// // const express = require("express");
// // const router = express.Router();
// // const { test, registerUser, loginUser, getProfile, uploadImage } = require("../controllers/authController");
// // const upload = require("../utils/multer");

// // // Authentication Routes
// // router.get("/", test);
// // router.post("/register", registerUser);
// // router.post("/login", loginUser);
// // router.get("/profile", getProfile);

// // // Image Upload Route
// // router.post("/upload", upload.single("image"), uploadImage);

// // module.exports = router;
// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");

// const authRoutes = require("./routes/authRoutes");

// const app = express();

// // Database Connection
// mongoose
//   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ Database Connected."))
//   .catch((err) => console.error("❌ Database Connection Failed:", err));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );

// // Routes
// app.use("/", authRoutes);

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
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
