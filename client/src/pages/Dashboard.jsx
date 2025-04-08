// // // // // // // // // // // import {useContext} from 'react';
// // // // // // // // // // // import {UserContext} from "../../context/userContext"
// // // // // // // // // // // export default function Dashboard() {
// // // // // // // // // // //   const {user} = useContext(UserContext)
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //         <h1>Dashboard</h1>
// // // // // // // // // // //         {!!user && (<h2>Hi {user.name}!</h2>)}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   )
// // // // // // // // // // // }
// // // // // // // // // // import { useContext, useState } from 'react';
// // // // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // // // import axios from 'axios';

// // // // // // // // // // export default function Dashboard() {
// // // // // // // // // //   const { user } = useContext(UserContext);
// // // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // // //   const handleFileChange = (e) => {
// // // // // // // // // //     setFile(e.target.files[0]);
// // // // // // // // // //   };

// // // // // // // // // //   const handleUpload = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const formData = new FormData();
// // // // // // // // // //       formData.append('image', file);
// // // // // // // // // //       formData.append('userId', user._id); // Pass the user ID

// // // // // // // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // // // //         },
// // // // // // // // // //       });

// // // // // // // // // //       console.log('Upload successful:', response.data);
// // // // // // // // // //       alert('Image uploaded successfully!');
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Upload failed:', error);
// // // // // // // // // //       alert('Image upload failed.');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <h1>Dashboard</h1>
// // // // // // // // // //       {!!user && <h2>Hi {user.name}!</h2>}
// // // // // // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // // // // // //       <button onClick={handleUpload}>Upload Image</button>
// // // // // // // // // //       {user?.imageUrl && (
// // // // // // // // // //         <div>
// // // // // // // // // //           <h3>Uploaded Image:</h3>
// // // // // // // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import { useContext, useState } from 'react';
// // // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // // import axios from 'axios';

// // // // // // // // // export default function Dashboard() {
// // // // // // // // //   const { user } = useContext(UserContext);
// // // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // // //   const handleFileChange = (e) => {
// // // // // // // // //     setFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleUpload = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const formData = new FormData();
// // // // // // // // //       formData.append('image', file);
// // // // // // // // //       formData.append('userId', user._id); // Pass the user ID

// // // // // // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // // //         },
// // // // // // // // //       });

// // // // // // // // //       console.log('Upload successful:', response.data);
// // // // // // // // //       alert('Image uploaded successfully!');
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Upload failed:', error);
// // // // // // // // //       alert('Image upload failed.');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h1>Dashboard</h1>
// // // // // // // // //       {!!user && <h2>Hi {user.name}!</h2>}
// // // // // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // // // // //       <button onClick={handleUpload}>Upload Image</button>
// // // // // // // // //       {user?.imageUrl && (
// // // // // // // // //         <div>
// // // // // // // // //           <h3>Uploaded Image:</h3>
// // // // // // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { useContext, useState } from 'react';
// // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // import axios from 'axios';

// // // // // // // // export default function Dashboard() {
// // // // // // // //   const { user } = useContext(UserContext);
// // // // // // // //   const [file, setFile] = useState(null);

// // // // // // // //   const handleFileChange = (e) => {
// // // // // // // //     setFile(e.target.files[0]);
// // // // // // // //   };

// // // // // // // //   const handleUpload = async () => {
// // // // // // // //     try {
// // // // // // // //       if (!file) {
// // // // // // // //         alert('Please select a file to upload.');
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       const formData = new FormData();
// // // // // // // //       formData.append('image', file);
// // // // // // // //       formData.append('userId', user._id); // Ensure userId is appended

// // // // // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // //         },
// // // // // // // //       });

// // // // // // // //       console.log('Upload successful:', response.data);
// // // // // // // //       alert('Image uploaded successfully!');
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Upload failed:', error);
// // // // // // // //       alert('Image upload failed.');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h1>Dashboard</h1>
// // // // // // // //       {!!user && <h2>Hi {user.name}!</h2>}
// // // // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // // // //       <button onClick={handleUpload}>Upload Image</button>
// // // // // // // //       {user?.imageUrl && (
// // // // // // // //         <div>
// // // // // // // //           <h3>Uploaded Image:</h3>
// // // // // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { useContext, useState } from 'react';
// // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // import axios from 'axios';

// // // // // // // export default function Dashboard() {
// // // // // // //   const { user } = useContext(UserContext);
// // // // // // //   const [file, setFile] = useState(null);

// // // // // // //   const handleFileChange = (e) => {
// // // // // // //     setFile(e.target.files[0]);
// // // // // // //   };

// // // // // // //   const handleUpload = async () => {
// // // // // // //     try {
// // // // // // //       if (!file) {
// // // // // // //         alert('Please select a file to upload.');
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append('image', file);
// // // // // // //       formData.append('userId', user._id); // Ensure userId is appended

// // // // // // //       console.log('User ID:', user._id); // Debug: Log the userId
// // // // // // //       console.log('File:', file); // Debug: Log the file

// // // // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // //         },
// // // // // // //       });

// // // // // // //       console.log('Upload successful:', response.data);
// // // // // // //       alert('Image uploaded successfully!');
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Upload failed:', error);
// // // // // // //       alert('Image upload failed.');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1>Dashboard</h1>
// // // // // // //       {!!user && <h2>Hi {user.name}!</h2>}
// // // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // // //       <button onClick={handleUpload}>Upload Image</button>
// // // // // // //       {user?.imageUrl && (
// // // // // // //         <div>
// // // // // // //           <h3>Uploaded Image:</h3>
// // // // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useContext, useState } from 'react';
// // // // // // import { UserContext } from '../../context/userContext';
// // // // // // import axios from 'axios';

// // // // // // export default function Dashboard() {
// // // // // //   const { user } = useContext(UserContext);
// // // // // //   const [file, setFile] = useState(null);

// // // // // //   const handleFileChange = (e) => {
// // // // // //     setFile(e.target.files[0]);
// // // // // //   };

// // // // // //   const handleUpload = async () => {
// // // // // //     try {
// // // // // //       if (!file) {
// // // // // //         alert('Please select a file to upload.');
// // // // // //         return;
// // // // // //       }

// // // // // //       const formData = new FormData();
// // // // // //       formData.append('image', file);
// // // // // //       formData.append('userId', user._id); // Ensure userId is appended
// // // // // //       console.log([...formData]); 
// // // // // //       console.log('User ID:', user._id); // Debug: Log the userId
// // // // // //       console.log('File:', file); // Debug: Log the file

// // // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // // //         headers: {
// // // // // //           'Content-Type': 'multipart/form-data',
// // // // // //         },
// // // // // //       });

// // // // // //       console.log('Upload successful:', response.data);
// // // // // //       alert('Image uploaded successfully!');
// // // // // //     } catch (error) {
// // // // // //       console.error('Upload failed:', error);
// // // // // //       alert('Image upload failed.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Dashboard</h1>
// // // // // //       {!!user && <h2>Hi {user.name}!</h2>}
// // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // //       <button onClick={handleUpload}>Upload Image</button>
// // // // // //       {user?.imageUrl && (
// // // // // //         <div>
// // // // // //           <h3>Uploaded Image:</h3>
// // // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useContext, useState, useEffect } from 'react';
// // // // // import { UserContext } from '../../context/userContext';
// // // // // import axios from 'axios';

// // // // // export default function Dashboard() {
// // // // //   const { user } = useContext(UserContext); // Get user from context
// // // // //   const [file, setFile] = useState(null);
// // // // //   const [uploading, setUploading] = useState(false);

// // // // //   useEffect(() => {
// // // // //     console.log('User from Context:', user); // Debug user context
// // // // //   }, [user]);

// // // // //   const handleFileChange = (e) => {
// // // // //     setFile(e.target.files[0]);
// // // // //   };

// // // // //   const handleUpload = async () => {
// // // // //     try {
// // // // //       if (!file) {
// // // // //         alert('Please select a file to upload.');
// // // // //         return;
// // // // //       }

// // // // //       if (!user || !user._id) {
// // // // //         console.error('User ID is undefined!');
// // // // //         alert('User is not logged in. Please login first.');
// // // // //         return;
// // // // //       }

// // // // //       setUploading(true);

// // // // //       const formData = new FormData();
// // // // //       formData.append('image', file);
// // // // //       formData.append('userId', user._id);

// // // // //       console.log('Uploading File:', file);
// // // // //       console.log('User ID:', user._id);

// // // // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // // // //         headers: { 'Content-Type': 'multipart/form-data' },
// // // // //       });

// // // // //       console.log('Upload successful:', response.data);
// // // // //       alert('Image uploaded successfully!');
// // // // //     } catch (error) {
// // // // //       console.error('Upload failed:', error.response?.data || error.message);
// // // // //       alert('Image upload failed.');
// // // // //     } finally {
// // // // //       setUploading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Dashboard</h1>
// // // // //       {user ? <h2>Hi {user.name}!</h2> : <h2>Loading user...</h2>}
// // // // //       <input type="file" onChange={handleFileChange} />
// // // // //       <button onClick={handleUpload} disabled={uploading}>
// // // // //         {uploading ? 'Uploading...' : 'Upload Image'}
// // // // //       </button>
// // // // //       {user?.imageUrl && (
// // // // //         <div>
// // // // //           <h3>Uploaded Image:</h3>
// // // // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // const User = require('../models/userModel');
// // // // const jwt = require('jsonwebtoken');
// // // // const bcrypt = require('bcryptjs');

// // // // // Register a new user
// // // // const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;

// // // //     if (!name || !email || !password) {
// // // //       return res.status(400).json({ error: "All fields are required!" });
// // // //     }

// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       return res.status(400).json({ error: "User already exists!" });
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // //     const newUser = new User({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });

// // // //     await newUser.save();

// // // //     res.status(201).json({ success: true, message: "User registered successfully!" });
// // // //   } catch (error) {
// // // //     console.error("Registration Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // // Login User
// // // // const loginUser = async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;

// // // //     if (!email || !password) {
// // // //       return res.status(400).json({ error: "Email and password are required!" });
// // // //     }

// // // //     const user = await User.findOne({ email });
// // // //     if (!user) {
// // // //       return res.status(400).json({ error: "User not found!" });
// // // //     }

// // // //     const match = await bcrypt.compare(password, user.password);
// // // //     if (!match) {
// // // //       return res.status(400).json({ error: "Incorrect password!" });
// // // //     }

// // // //     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

// // // //     res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" })
// // // //        .json({ success: true, user });
// // // //   } catch (error) {
// // // //     console.error("Login Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // // Logout User
// // // // const logoutUser = (req, res) => {
// // // //   try {
// // // //     res.clearCookie("token").json({ success: true, message: "Logged out successfully!" });
// // // //   } catch (error) {
// // // //     console.error("Logout Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // // Get user profile
// // // // const getProfile = async (req, res) => {
// // // //   try {
// // // //     const token = req.cookies.token;
// // // //     if (!token) {
// // // //       return res.status(401).json({ error: "Unauthorized! Please login first." });
// // // //     }

// // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //     const user = await User.findById(decoded.id).select("-password");

// // // //     if (!user) {
// // // //       return res.status(404).json({ error: "User not found!" });
// // // //     }

// // // //     res.json(user);
// // // //   } catch (error) {
// // // //     console.error("Profile Fetch Error:", error);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // };

// // // // module.exports = { registerUser, loginUser, logoutUser, getProfile };
// // // import { useContext, useState, useEffect } from 'react';
// // // import { UserContext } from '../../context/userContext';
// // // import axios from 'axios';

// // // const Dashboard = () => {
// // //   const { user } = useContext(UserContext); // Get user from context
// // //   const [file, setFile] = useState(null);
// // //   const [uploading, setUploading] = useState(false);

// // //   useEffect(() => {
// // //     console.log('User from Context:', user); // Debug user context
// // //   }, [user]);

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const handleUpload = async () => {
// // //     try {
// // //       if (!file) {
// // //         alert('Please select a file to upload.');
// // //         return;
// // //       }

// // //       if (!user || !user._id) {
// // //         console.error('User ID is undefined!');
// // //         alert('User is not logged in. Please login first.');
// // //         return;
// // //       }

// // //       setUploading(true);

// // //       const formData = new FormData();
// // //       formData.append('image', file);
// // //       formData.append('userId', user._id);

// // //       console.log('Uploading File:', file);
// // //       console.log('User ID:', user._id);

// // //       const response = await axios.post('http://localhost:8000/upload', formData, {
// // //         headers: { 'Content-Type': 'multipart/form-data' },
// // //       });

// // //       console.log('Upload successful:', response.data);
// // //       alert('Image uploaded successfully!');
// // //     } catch (error) {
// // //       console.error('Upload failed:', error.response?.data || error.message);
// // //       alert('Image upload failed.');
// // //     } finally {
// // //       setUploading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Dashboard</h1>
// // //       {user ? <h2>Hi {user.name}!</h2> : <h2>Loading user...</h2>}
// // //       <input type="file" onChange={handleFileChange} />
// // //       <button onClick={handleUpload} disabled={uploading}>
// // //         {uploading ? 'Uploading...' : 'Upload Image'}
// // //       </button>
// // //       {user?.imageUrl && (
// // //         <div>
// // //           <h3>Uploaded Image:</h3>
// // //           <img src={user.imageUrl} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // // 🔥 FIX: Properly export the component
// // // export default Dashboard;
// // import { useContext, useState, useEffect } from "react";
// // import { UserContext } from "../../context/userContext";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const { user, setUser } = useContext(UserContext);
// //   const [file, setFile] = useState(null);
// //   const [uploading, setUploading] = useState(false);

// //   useEffect(() => {
// //     console.log("User from Context:", user);
// //   }, [user]);

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleUpload = async () => {
// //     if (!file) {
// //       alert("Please select a file to upload.");
// //       return;
// //     }

// //     if (!user?.id) {
// //       console.error("User ID is undefined!");
// //       alert("User is not logged in. Please login first.");
// //       return;
// //     }

// //     setUploading(true);

// //     const formData = new FormData();
// //     formData.append("image", file);
// //     formData.append("userId", user.id);

// //     try {
// //       const response = await axios.post("http://localhost:8000/upload", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });

// //       console.log("Upload successful:", response.data);
// //       alert("Image uploaded successfully!");
// //       setUser({ ...user, imageUrl: response.data.imageUrl });
// //     } catch (error) {
// //       console.error("Upload failed:", error.response?.data || error.message);
// //       alert("Image upload failed.");
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Dashboard</h1>
// //       {user ? <h2>Hi {user.name}!</h2> : <h2>Loading user...</h2>}
// //       <input type="file" onChange={handleFileChange} />
// //       <button onClick={handleUpload} disabled={uploading}>{uploading ? "Uploading..." : "Upload Image"}</button>
// //       {user?.imageUrl && <img src={user.imageUrl} alt="Uploaded" style={{ width: "200px", height: "auto" }} />}
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import { useContext, useState } from "react";
// import { UserContext } from "../../context/userContext";
// import axios from "axios";

// const Dashboard = () => {
//   const { user, setUser } = useContext(UserContext);
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleUpload = async () => {
//     if (!file || !user?.id) return alert("Please select a file and login first!");

//     setUploading(true);
//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("userId", user.id);

//     try {
//       const { data } = await axios.post("http://localhost:8000/upload", formData);
//       setUser({ ...user, imageUrl: data.imageUrl });
//       alert("Upload successful!");
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Upload failed!");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
//     </div>
//   );
// };

// export default Dashboard;
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file || !user?.id) return alert("Please select a file and login first!");

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user.id);

    try {
      const { data } = await axios.post("http://localhost:8000/api/auth/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser({ ...user, imageUrl: data.imageUrl });
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {user?.imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={`http://localhost:8000${user.imageUrl}`}
            alt="User"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
