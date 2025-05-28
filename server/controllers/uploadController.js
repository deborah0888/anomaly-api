const User = require("../models/user");
const path = require("path");

const uploadImage = async (req, res) => {
  try {
    const userId = req.body.userId;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    // Generate the relative URL path to be stored (e.g., /uploads/filename.jpg)
    const imageUrl = `/uploads/${file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          images: {
            imageUrl: imageUrl,
            uploadedAt: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({
      message: "Image uploaded successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("❌ Upload error:", error);
    res.status(500).json({ error: "Something went wrong while uploading." });
  }
};

module.exports = { uploadImage };
