// // // // // // // // // const User=require('../models/user')
// // // // // // // // // const {hashPassword,comparePassword }= require('../helpers/auth')
// // // // // // // // // const jwt=require('jsonwebtoken')

// // // // // // // // // const test=(req,res)=>{
// // // // // // // // //     res.json('test is working')
// // // // // // // // // }

// // // // // // // // // //Register Endpoint
// // // // // // // // // const registerUser =async (req,res)=> {
// // // // // // // // //     try{
// // // // // // // // //         const {name,email,password}=req.body;
// // // // // // // // //         // Check if name was entered
// // // // // // // // //         if(!name){
// // // // // // // // //             return res.json({
// // // // // // // // //                 error: 'name is required'
// // // // // // // // //             })
// // // // // // // // //         };
// // // // // // // // //         //Check if password is good
// // // // // // // // //         if(!password || password.length<6){
// // // // // // // // //             return res.json({
// // // // // // // // //                 error: 'Password is required and should be at least 6 characters long'
// // // // // // // // //             })
// // // // // // // // //         };
// // // // // // // // //         //Check email
// // // // // // // // //         const exist = await User.findOne({email});
// // // // // // // // //         if(exist){
// // // // // // // // //             return response.json({
// // // // // // // // //                 error: 'Email is taken already'
// // // // // // // // //             })
// // // // // // // // //         }
// // // // // // // // //         const hashedPassword=await hashPassword(password)
// // // // // // // // //         //Create user in database
// // // // // // // // //         const user=await User.create({
// // // // // // // // //             name,
// // // // // // // // //             email,
// // // // // // // // //             password: hashedPassword,
// // // // // // // // //         })
// // // // // // // // //         return res.json(user);
// // // // // // // // //     }catch(error){
// // // // // // // // //         console.log(error)
// // // // // // // // //     }
// // // // // // // // // };

// // // // // // // // // //Login endpoint
// // // // // // // // // const loginUser =async (req,res)=>{
// // // // // // // // //     try{
// // // // // // // // //         const {email,password}=req.body;

// // // // // // // // //         //check if user exists
// // // // // // // // //         const user=await User.findOne({email});
// // // // // // // // //     if(!user){
// // // // // // // // //         return res.json({
// // // // // // // // //             error: 'No user found'
// // // // // // // // //         })
// // // // // // // // //     }
// // // // // // // // //     //check if passwords match
// // // // // // // // //     const match=await comparePassword(password,user.password)
// // // // // // // // //     if(match){
// // // // // // // // //         jwt.sign({email: user.email,id: user._id,name: user.name,},process.env.JWT_SECRET,{},(err,token)=>{
// // // // // // // // //             if(err) throw err;
// // // // // // // // //             res.cookie('token',token).json(user)
// // // // // // // // //         })
       
// // // // // // // // //     }
// // // // // // // // //     if(!match){
// // // // // // // // //         res.json({ error:'Passwords do not match'})
// // // // // // // // //     }
// // // // // // // // //     }catch(error){
// // // // // // // // //         console.log(error)
// // // // // // // // //     }
    
// // // // // // // // // }

// // // // // // // // // const getProfile=(req,res)=>{
// // // // // // // // //     const {token}=req.cookies
// // // // // // // // //     if(token){
// // // // // // // // //         jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
// // // // // // // // //             if(err) throw err;
// // // // // // // // //             res.json(user)
// // // // // // // // //         })
// // // // // // // // //     }else{
// // // // // // // // //         res.json(null)
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // module.exports={
// // // // // // // // //     test,
// // // // // // // // //     registerUser,
// // // // // // // // //     loginUser,
// // // // // // // // //     getProfile
// // // // // // // // // }
// // // // // // // // const User = require('../models/user');
// // // // // // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // // // // // const jwt = require('jsonwebtoken');
// // // // // // // // const cloudinary = require('cloudinary').v2;

// // // // // // // // // Configure Cloudinary
// // // // // // // // cloudinary.config({
// // // // // // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // // // // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // // // // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // // // // // });

// // // // // // // // // Existing functions (test, registerUser, loginUser, getProfile)...

// // // // // // // // // New function for image upload
// // // // // // // // const uploadImage = async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { userId } = req.body; // Pass the user ID from the frontend
// // // // // // // //     const file = req.file; // File uploaded by the user

// // // // // // // //     // Upload image to Cloudinary
// // // // // // // //     const result = await cloudinary.uploader.upload(file.path, {
// // // // // // // //       folder: 'uploads', // Optional: Organize images in a folder
// // // // // // // //     });

// // // // // // // //     // Save the Cloudinary URL to the user's profile in MongoDB
// // // // // // // //     const user = await User.findByIdAndUpdate(
// // // // // // // //       userId,
// // // // // // // //       { imageUrl: result.secure_url },
// // // // // // // //       { new: true }
// // // // // // // //     );

// // // // // // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error(error);
// // // // // // // //     res.status(500).json({ error: 'Image upload failed' });
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // module.exports = {
// // // // // // // //   test,
// // // // // // // //   registerUser,
// // // // // // // //   loginUser,
// // // // // // // //   getProfile,
// // // // // // // //   uploadImage, // Export the new function
// // // // // // // // };
// // // // // // // const User = require('../models/user');
// // // // // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // // // // const jwt = require('jsonwebtoken');
// // // // // // // const cloudinary = require('cloudinary').v2;

// // // // // // // // Configure Cloudinary
// // // // // // // cloudinary.config({
// // // // // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // // // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // // // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // // // // });

// // // // // // // // Existing functions (test, registerUser, loginUser, getProfile)...

// // // // // // // // New function for image upload
// // // // // // // const uploadImage = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { userId } = req.body; // Pass the user ID from the frontend
// // // // // // //     const file = req.file; // File uploaded by the user

// // // // // // //     // Upload image to Cloudinary
// // // // // // //     const result = await cloudinary.uploader.upload(file.path, {
// // // // // // //       folder: 'uploads', // Optional: Organize images in a folder
// // // // // // //     });

// // // // // // //     // Save the Cloudinary URL to the user's profile in MongoDB
// // // // // // //     const user = await User.findByIdAndUpdate(
// // // // // // //       userId,
// // // // // // //       { imageUrl: result.secure_url },
// // // // // // //       { new: true }
// // // // // // //     );

// // // // // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // // // // //   } catch (error) {
// // // // // // //     console.error(error);
// // // // // // //     res.status(500).json({ error: 'Image upload failed' });
// // // // // // //   }
// // // // // // // };

// // // // // // // module.exports = {
// // // // // // //   test,
// // // // // // //   registerUser,
// // // // // // //   loginUser,
// // // // // // //   getProfile,
// // // // // // //   uploadImage, // Export the new function
// // // // // // // };
// // // // // // const User = require('../models/user');
// // // // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // // // const jwt = require('jsonwebtoken');
// // // // // // const cloudinary = require('cloudinary').v2;

// // // // // // // Configure Cloudinary
// // // // // // cloudinary.config({
// // // // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // // // });

// // // // // // // Test function
// // // // // // const test = (req, res) => {
// // // // // //   res.json('test is working');
// // // // // // };

// // // // // // // Register Endpoint
// // // // // // const registerUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { name, email, password } = req.body;
// // // // // //     // Check if name was entered
// // // // // //     if (!name) {
// // // // // //       return res.json({
// // // // // //         error: 'name is required',
// // // // // //       });
// // // // // //     }
// // // // // //     // Check if password is good
// // // // // //     if (!password || password.length < 6) {
// // // // // //       return res.json({
// // // // // //         error: 'Password is required and should be at least 6 characters long',
// // // // // //       });
// // // // // //     }
// // // // // //     // Check email
// // // // // //     const exist = await User.findOne({ email });
// // // // // //     if (exist) {
// // // // // //       return res.json({
// // // // // //         error: 'Email is taken already',
// // // // // //       });
// // // // // //     }
// // // // // //     const hashedPassword = await hashPassword(password);
// // // // // //     // Create user in database
// // // // // //     const user = await User.create({
// // // // // //       name,
// // // // // //       email,
// // // // // //       password: hashedPassword,
// // // // // //     });
// // // // // //     return res.json(user);
// // // // // //   } catch (error) {
// // // // // //     console.log(error);
// // // // // //   }
// // // // // // };

// // // // // // // Login endpoint
// // // // // // const loginUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { email, password } = req.body;

// // // // // //     // Check if user exists
// // // // // //     const user = await User.findOne({ email });
// // // // // //     if (!user) {
// // // // // //       return res.json({
// // // // // //         error: 'No user found',
// // // // // //       });
// // // // // //     }
// // // // // //     // Check if passwords match
// // // // // //     const match = await comparePassword(password, user.password);
// // // // // //     if (match) {
// // // // // //       jwt.sign(
// // // // // //         { email: user.email, id: user._id, name: user.name },
// // // // // //         process.env.JWT_SECRET,
// // // // // //         {},
// // // // // //         (err, token) => {
// // // // // //           if (err) throw err;
// // // // // //           res.cookie('token', token).json(user);
// // // // // //         }
// // // // // //       );
// // // // // //     }
// // // // // //     if (!match) {
// // // // // //       res.json({ error: 'Passwords do not match' });
// // // // // //     }
// // // // // //   } catch (error) {
// // // // // //     console.log(error);
// // // // // //   }
// // // // // // };

// // // // // // // Get profile endpoint
// // // // // // const getProfile = (req, res) => {
// // // // // //   const { token } = req.cookies;
// // // // // //   if (token) {
// // // // // //     jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
// // // // // //       if (err) throw err;
// // // // // //       res.json(user);
// // // // // //     });
// // // // // //   } else {
// // // // // //     res.json(null);
// // // // // //   }
// // // // // // };

// // // // // // // Upload image endpoint
// // // // // // const uploadImage = async (req, res) => {
// // // // // //   try {
// // // // // //     const { userId } = req.body; // Pass the user ID from the frontend
// // // // // //     const file = req.file; // File uploaded by the user

// // // // // //     // Upload image to Cloudinary
// // // // // //     const result = await cloudinary.uploader.upload(file.path, {
// // // // // //       folder: 'uploads', // Optional: Organize images in a folder
// // // // // //     });

// // // // // //     // Save the Cloudinary URL to the user's profile in MongoDB
// // // // // //     const user = await User.findByIdAndUpdate(
// // // // // //       userId,
// // // // // //       { imageUrl: result.secure_url },
// // // // // //       { new: true }
// // // // // //     );

// // // // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // // // //   } catch (error) {
// // // // // //     console.error(error);
// // // // // //     res.status(500).json({ error: 'Image upload failed' });
// // // // // //   }
// // // // // // };

// // // // // // // Export all functions
// // // // // // module.exports = {
// // // // // //   test,
// // // // // //   registerUser,
// // // // // //   loginUser,
// // // // // //   getProfile,
// // // // // //   uploadImage,
// // // // // // };
// // // // // const User = require('../models/user');
// // // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // // const jwt = require('jsonwebtoken');
// // // // // const cloudinary = require('cloudinary').v2;

// // // // // // Configure Cloudinary
// // // // // cloudinary.config({
// // // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // // });

// // // // // // Test function
// // // // // const test = (req, res) => {
// // // // //   res.json('test is working');
// // // // // };

// // // // // // Register Endpoint
// // // // // const registerUser = async (req, res) => {
// // // // //   try {
// // // // //     const { name, email, password } = req.body;
// // // // //     // Check if name was entered
// // // // //     if (!name) {
// // // // //       return res.json({
// // // // //         error: 'name is required',
// // // // //       });
// // // // //     }
// // // // //     // Check if password is good
// // // // //     if (!password || password.length < 6) {
// // // // //       return res.json({
// // // // //         error: 'Password is required and should be at least 6 characters long',
// // // // //       });
// // // // //     }
// // // // //     // Check email
// // // // //     const exist = await User.findOne({ email });
// // // // //     if (exist) {
// // // // //       return res.json({
// // // // //         error: 'Email is taken already',
// // // // //       });
// // // // //     }
// // // // //     const hashedPassword = await hashPassword(password);
// // // // //     // Create user in database
// // // // //     const user = await User.create({
// // // // //       name,
// // // // //       email,
// // // // //       password: hashedPassword,
// // // // //     });
// // // // //     return res.json(user);
// // // // //   } catch (error) {
// // // // //     console.log(error);
// // // // //     res.status(500).json({ error: 'Registration failed' });
// // // // //   }
// // // // // };

// // // // // // Login endpoint
// // // // // const loginUser = async (req, res) => {
// // // // //   try {
// // // // //     const { email, password } = req.body;

// // // // //     // Check if user exists
// // // // //     const user = await User.findOne({ email });
// // // // //     if (!user) {
// // // // //       return res.json({
// // // // //         error: 'No user found',
// // // // //       });
// // // // //     }
// // // // //     // Check if passwords match
// // // // //     const match = await comparePassword(password, user.password);
// // // // //     if (match) {
// // // // //       jwt.sign(
// // // // //         { email: user.email, id: user._id, name: user.name },
// // // // //         process.env.JWT_SECRET,
// // // // //         {},
// // // // //         (err, token) => {
// // // // //           if (err) throw err;
// // // // //           res.cookie('token', token).json(user);
// // // // //         }
// // // // //       );
// // // // //     } else {
// // // // //       res.json({ error: 'Passwords do not match' });
// // // // //     }
// // // // //   } catch (error) {
// // // // //     console.log(error);
// // // // //     res.status(500).json({ error: 'Login failed' });
// // // // //   }
// // // // // };

// // // // // // Get profile endpoint
// // // // // const getProfile = (req, res) => {
// // // // //   const { token } = req.cookies;
// // // // //   if (token) {
// // // // //     jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
// // // // //       if (err) throw err;
// // // // //       res.json(user);
// // // // //     });
// // // // //   } else {
// // // // //     res.json(null);
// // // // //   }
// // // // // };

// // // // // // // Upload image endpoint
// // // // // // const uploadImage = async (req, res) => {
// // // // // //   try {
// // // // // //     const { userId } = req.body; // Extract userId from the request body
// // // // // //     const file = req.file; // File uploaded by the user

// // // // // //     // Check if userId is provided
// // // // // //     if (!userId) {
// // // // // //       return res.status(400).json({ error: 'User ID is required' });
// // // // // //     }

// // // // // //     // Check if a file is uploaded
// // // // // //     if (!file) {
// // // // // //       return res.status(400).json({ error: 'No file uploaded' });
// // // // // //     }

// // // // // //     // Upload image to Cloudinary
// // // // // //     const result = await cloudinary.uploader.upload(file.path, {
// // // // // //       folder: 'uploads', // Optional: Organize images in a folder
// // // // // //     });

// // // // // //     // Save the Cloudinary URL to the user's profile in MongoDB
// // // // // //     const user = await User.findByIdAndUpdate(
// // // // // //       userId,
// // // // // //       { imageUrl: result.secure_url },
// // // // // //       { new: true }
// // // // // //     );

// // // // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // // // //   } catch (error) {
// // // // // //     console.error(error);
// // // // // //     res.status(500).json({ error: 'Image upload failed' });
// // // // // //   }
// // // // // // };
// // // // // const uploadImage = async (req, res) => {
// // // // //   try {
// // // // //     const { userId } = req.body; // Extract userId from the request body
// // // // //     const file = req.file; // File uploaded by the user

// // // // //     console.log('User ID from request:', userId); // Debug: Log the userId
// // // // //     console.log('File from request:', file); // Debug: Log the file

// // // // //     // Check if userId is provided
// // // // //     if (!userId) {
// // // // //       return res.status(400).json({ error: 'User ID is required' });
// // // // //     }

// // // // //     // Check if a file is uploaded
// // // // //     if (!file) {
// // // // //       return res.status(400).json({ error: 'No file uploaded' });
// // // // //     }

// // // // //     // Upload image to Cloudinary
// // // // //     const result = await cloudinary.uploader.upload(file.path, {
// // // // //       folder: 'uploads', // Optional: Organize images in a folder
// // // // //     });

// // // // //     // Save the Cloudinary URL to the user's profile in MongoDB
// // // // //     const user = await User.findByIdAndUpdate(
// // // // //       userId,
// // // // //       { imageUrl: result.secure_url },
// // // // //       { new: true }
// // // // //     );

// // // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // // //   } catch (error) {
// // // // //     console.error('Error in uploadImage:', error); // Debug: Log the error
// // // // //     res.status(500).json({ error: 'Image upload failed' });
// // // // //   }
// // // // // };
// // // // // // Export all functions
// // // // // module.exports = {
// // // // //   test,
// // // // //   registerUser,
// // // // //   loginUser,
// // // // //   getProfile,
// // // // //   uploadImage,
// // // // // };
// // // // require('dotenv').config();

// // // // const User = require('../models/user');
// // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // const jwt = require('jsonwebtoken');
// // // // const cloudinary = require('cloudinary').v2;
// // // // const multer = require('../utils/multer');


// // // // // Configure Cloudinary
// // // // cloudinary.config({
// // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // });

// // // // // Test function
// // // // const test = (req, res) => {
// // // //   res.json('test is working');
// // // // };

// // // // // Register Endpoint
// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;
// // // //     if (!name) {
// // // //       return res.status(400).json({ error: 'Name is required' });
// // // //     }
// // // //     if (!password || password.length < 6) {
// // // //       return res.status(400).json({ error: 'Password must be at least 6 characters long' });
// // // //     }
// // // //     const exist = await User.findOne({ email });
// // // //     if (exist) {
// // // //       return res.status(400).json({ error: 'Email is already taken' });
// // // //     }
// // // //     const hashedPassword = await hashPassword(password);
// // // //     const user = await User.create({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });
// // // //     res.status(201).json(user);
// // // //   } catch (error) {
// // // //     console.error('Registration Error:', error);
// // // //     res.status(500).json({ error: 'Registration failed' });
// // // //   }
// // // // };

// // // // // Login Endpoint
// // // // const loginUser = async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;
// // // //     const user = await User.findOne({ email });
// // // //     if (!user) {
// // // //       return res.status(400).json({ error: 'No user found' });
// // // //     }
// // // //     const match = await comparePassword(password, user.password);
// // // //     if (match) {
// // // //       const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {
// // // //         expiresIn: '7d',
// // // //       });
// // // //       res.cookie('token', token, { httpOnly: true }).json(user);
// // // //     } else {
// // // //       res.status(400).json({ error: 'Passwords do not match' });
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Login Error:', error);
// // // //     res.status(500).json({ error: 'Login failed' });
// // // //   }
// // // // };

// // // // // Get Profile Endpoint
// // // // const getProfile = (req, res) => {
// // // //   const { token } = req.cookies;
// // // //   if (!token) {
// // // //     return res.status(401).json({ error: 'Unauthorized' });
// // // //   }
// // // //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// // // //     if (err) {
// // // //       return res.status(403).json({ error: 'Invalid token' });
// // // //     }
// // // //     res.json(user);
// // // //   });
// // // // };

// // // // // Upload Image Endpoint
// // // // const uploadImage = async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.body;
// // // //     const file = req.file;
// // // //     if (!userId) {
// // // //       return res.status(400).json({ error: 'User ID is required' });
// // // //     }
// // // //     if (!file) {
// // // //       return res.status(400).json({ error: 'No file uploaded' });
// // // //     }
// // // //     const result = await cloudinary.uploader.upload(file.path, { folder: 'uploads' });
// // // //     const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });
// // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // //   } catch (error) {
// // // //     console.error('Upload Error:', error);
// // // //     res.status(500).json({ error: 'Image upload failed' });
// // // //   }
// // // // };

// // // // module.exports = {
// // // //   test,
// // // //   registerUser,
// // // //   loginUser,
// // // //   getProfile,
 
// // // // };
// // // // require('dotenv').config();

// // // // const User = require('../models/user');
// // // // const { hashPassword, comparePassword } = require('../helpers/auth');
// // // // const jwt = require('jsonwebtoken');
// // // // const cloudinary = require('cloudinary').v2;
// // // // const multer = require('../utils/multer');

// // // // // Configure Cloudinary
// // // // cloudinary.config({
// // // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // // //   api_key: process.env.CLOUDINARY_API_KEY,
// // // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // // });

// // // // // Test function
// // // // const test = (req, res) => {
// // // //   res.json('Test is working');
// // // // };

// // // // // Register User
// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;
// // // //     if (!name) return res.status(400).json({ error: 'Name is required' });
// // // //     if (!password || password.length < 6) {
// // // //       return res.status(400).json({ error: 'Password must be at least 6 characters long' });
// // // //     }
// // // //     const exist = await User.findOne({ email });
// // // //     if (exist) return res.status(400).json({ error: 'Email is already taken' });

// // // //     const hashedPassword = await hashPassword(password);
// // // //     const user = await User.create({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });

// // // //     res.status(201).json(user);
// // // //   } catch (error) {
// // // //     console.error('Registration Error:', error);
// // // //     res.status(500).json({ error: 'Registration failed' });
// // // //   }
// // // // };

// // // // // Login User
// // // // const loginUser = async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;
// // // //     const user = await User.findOne({ email });
// // // //     if (!user) return res.status(400).json({ error: 'No user found' });

// // // //     const match = await comparePassword(password, user.password);
// // // //     if (match) {
// // // //       const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {
// // // //         expiresIn: '7d',
// // // //       });

// // // //       res.cookie('token', token, { httpOnly: true }).json(user);
// // // //     } else {
// // // //       res.status(400).json({ error: 'Passwords do not match' });
// // // //     }
// // // //   } catch (error) {
// // // //     console.error('Login Error:', error);
// // // //     res.status(500).json({ error: 'Login failed' });
// // // //   }
// // // // };

// // // // // Get Profile
// // // // const getProfile = (req, res) => {
// // // //   const { token } = req.cookies;
// // // //   if (!token) return res.status(401).json({ error: 'Unauthorized' });

// // // //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// // // //     if (err) return res.status(403).json({ error: 'Invalid token' });
// // // //     res.json(user);
// // // //   });
// // // // };

// // // // // Upload Image
// // // // const uploadImage = async (req, res) => {
// // // //   try {
// // // //     const { userId } = req.body;
// // // //     const file = req.file;
// // // //     if (!userId) return res.status(400).json({ error: 'User ID is required' });
// // // //     if (!file) return res.status(400).json({ error: 'No file uploaded' });

// // // //     const result = await cloudinary.uploader.upload(file.path, { folder: 'uploads' });

// // // //     const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });

// // // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // // //   } catch (error) {
// // // //     console.error('Upload Error:', error);
// // // //     res.status(500).json({ error: 'Image upload failed' });
// // // //   }
// // // // };

// // // // module.exports = {
// // // //   test,
// // // //   registerUser,
// // // //   loginUser,
// // // //   getProfile,
// // // //   uploadImage, // Ensure this is exported
// // // // };
// // // require("dotenv").config();
// // // const User = require("../models/user");
// // // const { hashPassword, comparePassword } = require("../helpers/auth");
// // // const jwt = require("jsonwebtoken");
// // // const cloudinary = require("cloudinary").v2;
// // // const multer = require("../utils/multer");

// // // // Configure Cloudinary
// // // cloudinary.config({
// // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // //   api_key: process.env.CLOUDINARY_API_KEY,
// // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // });

// // // // Test function
// // // const test = (req, res) => {
// // //   res.json("Test is working");
// // // };

// // // // // Register User
// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;
// // // //     if (!name) return res.status(400).json({ error: "Name is required" });
// // // //     if (!password || password.length < 6) {
// // // //       return res.status(400).json({ error: "Password must be at least 6 characters long" });
// // // //     }

// // // //     const exist = await User.findOne({ email });
// // // //     if (exist) return res.status(400).json({ error: "Email is already taken" });

// // // //     const hashedPassword = await hashPassword(password);
// // // //     const user = await User.create({ name, email, password: hashedPassword });

// // // //     res.status(201).json({ message: "User registered successfully", user });
// // // //   } catch (error) {
// // // //     console.error("Registration Error:", error);
// // // //     res.status(500).json({ error: "Registration failed" });
// // // //   }
// // // // };
// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;

// // // //     // Validation
// // // //     if (!name) return res.status(400).json({ error: 'Name is required' });
// // // //     if (!password || password.length < 6) {
// // // //       return res.status(400).json({ error: 'Password must be at least 6 characters long' });
// // // //     }

// // // //     // Check if user already exists
// // // //     const exist = await User.findOne({ email });
// // // //     if (exist) return res.status(400).json({ error: 'Email is already taken' });

// // // //     // Hash Password
// // // //     const hashedPassword = await hashPassword(password);

// // // //     // Create User
// // // //     const user = await User.create({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });

// // // //     // Generate Token
// // // //     const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {
// // // //       expiresIn: '7d',
// // // //     });

// // // //     res.cookie('token', token, { httpOnly: true }).status(201).json(user);
// // // //   } catch (error) {
// // // //     console.error('Registration Error:', error);
// // // //     res.status(500).json({ error: 'Registration failed' });
// // // //   }
// // // // };
// // // const registerUser = async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;

// // //     // Check if request body is received
// // //     if (!name || !email || !password) {
// // //       return res.status(400).json({ error: 'All fields are required' });
// // //     }

// // //     // Check if email already exists
// // //     const exist = await User.findOne({ email });
// // //     if (exist) return res.status(400).json({ error: 'Email is already taken' });

// // //     // Hash Password
// // //     const hashedPassword = await hashPassword(password);

// // //     // Create User
// // //     const user = new User({
// // //       name,
// // //       email,
// // //       password: hashedPassword,
// // //     });
// // //     await user.save(); // Save user

// // //     // Generate JWT Token
// // //     const token = jwt.sign(
// // //       { email: user.email, id: user._id, name: user.name },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: '7d' }
// // //     );

// // //     res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
// // //     res.status(201).json({ message: 'User registered successfully', user });
// // //   } catch (error) {
// // //     console.error('Registration Error:', error);
// // //     res.status(500).json({ error: 'Registration failed' });
// // //   }
// // // };

// // // // Login User
// // // // const loginUser = async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;
// // // //     const user = await User.findOne({ email });
// // // //     if (!user) return res.status(400).json({ error: "No user found" });

// // // //     const match = await comparePassword(password, user.password);
// // // //     if (!match) return res.status(400).json({ error: "Invalid credentials" });

// // // //     const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
// // // //       expiresIn: "7d",
// // // //     });

// // // //     res
// // // //       .cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" })
// // // //       .json({ message: "Login successful", user });
// // // //   } catch (error) {
// // // //     console.error("Login Error:", error);
// // // //     res.status(500).json({ error: "Login failed" });
// // // //   }
// // // // };
// // // const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     if (!email || !password) {
// // //       return res.status(400).json({ error: "Email and password are required!" });
// // //     }

// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.status(400).json({ error: "User not found!" });
// // //     }

// // //     const match = await comparePassword(password, user.password);
// // //     if (!match) {
// // //       return res.status(400).json({ error: "Incorrect password!" });
// // //     }

// // //     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

// // //     res.cookie("token", token, { httpOnly: true }).json({ success: true, user });
// // //   } catch (error) {
// // //     console.error("Login Error:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // };

// // // // Get Profile
// // // const getProfile = (req, res) => {
// // //   const { token } = req.cookies;
// // //   if (!token) return res.status(401).json({ error: "Unauthorized" });

// // //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// // //     if (err) return res.status(403).json({ error: "Invalid token" });
// // //     res.json(user);
// // //   });
// // // };

// // // // Upload Image
// // // const uploadImage = async (req, res) => {
// // //   try {
// // //     const { userId } = req.body;
// // //     const file = req.file;
// // //     if (!userId) return res.status(400).json({ error: "User ID is required" });
// // //     if (!file) return res.status(400).json({ error: "No file uploaded" });

// // //     const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });

// // //     const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });

// // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // //   } catch (error) {
// // //     console.error("Upload Error:", error);
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
// // // const jwt = require("jsonwebtoken");
// // // const User = require("../models/User"); // Make sure you have the User model
// // // const { comparePassword } = require("../utils/auth");
// // // const cloudinary = require("cloudinary").v2;

// // // const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     if (!email || !password) {
// // //       return res.status(400).json({ error: "Email and password are required!" });
// // //     }

// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.status(400).json({ error: "User not found!" });
// // //     }

// // //     const match = await comparePassword(password, user.password);
// // //     if (!match) {
// // //       return res.status(400).json({ error: "Incorrect password!" });
// // //     }

// // //     const token = jwt.sign(
// // //       { id: user._id, email: user.email },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: "7d" }
// // //     );

// // //     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
// // //       success: true,
// // //       user: { id: user._id, name: user.name, email: user.email, imageUrl: user.imageUrl },
// // //       token,
// // //     });
// // //   } catch (error) {
// // //     console.error("Login Error:", error);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // };

// // // // Get Profile
// // // const getProfile = (req, res) => {
// // //   const { token } = req.cookies;
// // //   if (!token) return res.status(401).json({ error: "Unauthorized" });

// // //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// // //     if (err) return res.status(403).json({ error: "Invalid token" });

// // //     const user = await User.findById(decoded.id).select("-password");
// // //     if (!user) return res.status(404).json({ error: "User not found" });

// // //     res.json(user);
// // //   });
// // // };

// // // // Upload Image
// // // const uploadImage = async (req, res) => {
// // //   try {
// // //     const { userId } = req.body;
// // //     const file = req.file;
// // //     if (!userId) return res.status(400).json({ error: "User ID is required" });
// // //     if (!file) return res.status(400).json({ error: "No file uploaded" });

// // //     const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });

// // //     const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });

// // //     res.json({ success: true, imageUrl: result.secure_url, user });
// // //   } catch (error) {
// // //     console.error("Upload Error:", error);
// // //     res.status(500).json({ error: "Image upload failed" });
// // //   }
// // // };

// // // module.exports = {
// // //   loginUser,
// // //   getProfile,
// // //   uploadImage,
// // // };
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require("bcryptjs");
// // const User = require("../models/User"); // Ensure you have the User model
// // const { comparePassword, hashPassword } = require("../utils/auth");
// // const cloudinary = require("cloudinary").v2;

// // // Test Route Handler
// // const test = (req, res) => {
// //   res.json({ message: "Auth route is working!" });
// // };

// // // Register User
// // const registerUser = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     if (!name || !email || !password) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ error: "Email already in use" });
// //     }

// //     const hashedPassword = await hashPassword(password);
// //     const newUser = new User({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       imageUrl: "",
// //     });

// //     await newUser.save();
// //     res.status(201).json({ success: true, message: "User registered successfully" });
// //   } catch (error) {
// //     console.error("Registration Error:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // // Login User
// // const loginUser = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     if (!email || !password) {
// //       return res.status(400).json({ error: "Email and password are required!" });
// //     }

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ error: "User not found!" });
// //     }

// //     const match = await comparePassword(password, user.password);
// //     if (!match) {
// //       return res.status(400).json({ error: "Incorrect password!" });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, email: user.email },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "7d" }
// //     );

// //     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
// //       success: true,
// //       user: { id: user._id, name: user.name, email: user.email, imageUrl: user.imageUrl },
// //       token,
// //     });
// //   } catch (error) {
// //     console.error("Login Error:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // // Get Profile
// // const getProfile = async (req, res) => {
// //   const { token } = req.cookies;
// //   if (!token) return res.status(401).json({ error: "Unauthorized" });

// //   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
// //     if (err) return res.status(403).json({ error: "Invalid token" });

// //     const user = await User.findById(decoded.id).select("-password");
// //     if (!user) return res.status(404).json({ error: "User not found" });

// //     res.json(user);
// //   });
// // };

// // // Upload Image
// // const uploadImage = async (req, res) => {
// //   try {
// //     const { userId } = req.body;
// //     const file = req.file;
// //     if (!userId) return res.status(400).json({ error: "User ID is required" });
// //     if (!file) return res.status(400).json({ error: "No file uploaded" });

// //     const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });

// //     const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });

// //     res.json({ success: true, imageUrl: result.secure_url, user });
// //   } catch (error) {
// //     console.error("Upload Error:", error);
// //     res.status(500).json({ error: "Image upload failed" });
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
// const User = require("../models/User"); // Ensure you have the User model
// const { comparePassword, hashPassword } = require("../utils/auth");
// const cloudinary = require("cloudinary").v2;
// const streamifier = require("streamifier");

// // Test Route Handler
// const test = (req, res) => {
//   res.json({ message: "Auth route is working!" });
// };

// // Register User
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already in use" });
//     }

//     const hashedPassword = await hashPassword(password);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       imageUrl: "",
//     });

//     await newUser.save();
//     res.status(201).json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     console.error("Registration Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Login User
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required!" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "User not found!" });
//     }

//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       return res.status(400).json({ error: "Incorrect password!" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
//       success: true,
//       user: { id: user._id, name: user.name, email: user.email, imageUrl: user.imageUrl },
//       token,
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get Profile
// const getProfile = async (req, res) => {
//   const { token } = req.cookies;
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(403).json({ error: "Invalid token" });

//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.json(user);
//   });
// };

// // Upload Image (Fixed for Memory Storage)
// const uploadImage = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const file = req.file;
//     if (!userId) return res.status(400).json({ error: "User ID is required" });
//     if (!file) return res.status(400).json({ error: "No file uploaded" });

//     // Convert memory storage buffer to stream for Cloudinary
//     const uploadStream = cloudinary.uploader.upload_stream({ folder: "uploads" }, async (error, result) => {
//       if (error) return res.status(500).json({ error: "Image upload failed" });

//       const user = await User.findByIdAndUpdate(userId, { imageUrl: result.secure_url }, { new: true });

//       res.json({ success: true, imageUrl: result.secure_url, user });
//     });

//     streamifier.createReadStream(file.buffer).pipe(uploadStream);
//   } catch (error) {
//     console.error("Upload Error:", error);
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
const User = require("../models/User");
const { comparePassword, hashPassword } = require("../utils/auth");
//const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

// // Cloudinary Config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// Test Route
const test = (req, res) => {
  res.json({ message: "✅ Auth route is working!" });
};

// User Registration
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already in use" });
//     }

//     const hashedPassword = await hashPassword(password);
//     const newUser = new User({ name, email, password: hashedPassword, imageUrl: "" });

//     await newUser.save();
//     res.status(201).json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
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
    const newUser = new User({ name, email, password: hashedPassword, imageUrl: "" });
    await newUser.save();

    // ✅ Generate JWT after registration
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).status(201).json({
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

// User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required!" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" }).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, imageUrl: user.imageUrl },
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

// Image Upload 
// const uploadImage = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     if (!userId) return res.status(400).json({ error: "User ID is required" });

//     const file = req.file;
//     if (!file) return res.status(400).json({ error: "No file uploaded" });

//     const imagePath = `/uploads/${file.filename}`; // Relative path for frontend

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { imageUrl: imagePath },
//       { new: true }
//     );

//     res.json({ success: true, imageUrl: imagePath, user });
//   } catch (error) {
//     console.error("❌ Upload Error:", error);
//     res.status(500).json({ error: "Image upload failed" });
//   }
// };
// controllers/authController.js

const uploadImage = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "User ID is required" });
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // Save image path to MongoDB
    const imagePath = `/uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(
      userId,
      { imageUrl: imagePath },
      { new: true }
    ).select("-password");

    res.json({ success: true, imageUrl: imagePath, user });
  } catch (error) {
    console.error("❌ Upload Error:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
};

module.exports = { test, registerUser, loginUser, getProfile, uploadImage };
