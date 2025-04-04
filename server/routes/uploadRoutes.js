// // const express = require('express');
// // const multer = require('multer');
// // const cloudinary = require('cloudinary').v2;
// // const router = express.Router();

// // // Configure Multer for file uploads
// // const upload = multer({ dest: 'uploads/' });

// // // Upload image to Cloudinary
// // router.post('/upload', upload.single('image'), async (req, res) => {
// //   try {
// //     const result = await cloudinary.uploader.upload(req.file.path);
// //     res.status(200).json({ imageUrl: result.secure_url });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Image upload failed' });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const router = express.Router();

// // Configure Multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Upload image to Cloudinary
// router.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     res.status(200).json({ imageUrl: result.secure_url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Image upload failed' });
//   }
// });

// module.exports = router;
app.post("/upload", async (req, res) => {
    try {
      console.log(req.file);  // Debugging: Check if file is received
      if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  
      // Upload logic here...
  
      res.json({ success: true, message: "Upload successful" });
    } catch (error) {
      console.error("Upload Error:", error);
      res.status(500).json({ error: "Image upload failed" });
    }
  });
  