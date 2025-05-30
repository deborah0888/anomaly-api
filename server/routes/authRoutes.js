// // // // // // // // const express = require("express");
// // // // // // // // const router = express.Router();
// // // // // // // // const { test, registerUser, loginUser, getProfile, uploadImage } = require("../controllers/authController");
// // // // // // // // const upload = require("../utils/multer");

// // // // // // // // // Authentication Routes
// // // // // // // // router.get("/", test);
// // // // // // // // router.post("/register", registerUser);
// // // // // // // // router.post("/login", loginUser);
// // // // // // // // router.get("/profile", getProfile);

// // // // // // // // // Image Upload Route
// // // // // // // // router.post("/upload", upload.single("image"), uploadImage);

// // // // // // // // module.exports = router;
// // // // // // // const express = require("express");
// // // // // // // const router = express.Router();
// // // // // // // const {
// // // // // // //   test,
// // // // // // //   registerUser,
// // // // // // //   loginUser,
// // // // // // //   getProfile,
// // // // // // // } = require("../controllers/authController");
// // // // // // // const verifyToken = require("../middleware/verifyToken");
// // // // // // // const { uploadImage } = require("../controllers/uploadController");
// // // // // // // const upload = require("../utils/multer");
// // // // // // // const uploadController = require("../controllers/uploadController");
// // // // // // // // Authentication Routes
// // // // // // // router.get("/", test);
// // // // // // // router.post("/register", registerUser);
// // // // // // // router.post("/login", loginUser);
// // // // // // // router.get("/profile", getProfile);
// // // // // // // router.post("/logout", (req, res) => {
// // // // // // //   res.clearCookie("token"); // Make sure "token" matches the cookie name you used in login
// // // // // // //   res.status(200).json({ message: "Logged out successfully" });
// // // // // // // });
// // // // // // // // Add this new route
// // // // // // // router.get("/image/:id", uploadController.getImage);
// // // // // // // // Image Upload Route
// // // // // // // //router.post("/upload", upload.single("image"), uploadImage);
// // // // // // // router.post("/upload", verifyToken, upload.single("image"), (req, res) => {
// // // // // // //   req.body.userId = req.userId;  // set userId from verified token
// // // // // // //   uploadImage(req, res);
// // // // // // // });
// // // // // // // router.get("/image/:id", uploadController.getImage);

// // // // // // // // router.post("/upload", verifyToken, upload.single("image"), (req, res) => {
// // // // // // // //   req.body.userId = req.userId; // userId from token attached by middleware
// // // // // // // //   uploadImage(req, res);
// // // // // // // // });

// // // // // // // module.exports = router;
// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const {
// // // // // //   test,
// // // // // //   registerUser,
// // // // // //   loginUser,
// // // // // //   getProfile,
// // // // // // } = require("../controllers/authController");
// // // // // // const verifyToken = require("../middleware/verifyToken");
// // // // // // const { uploadImage, getImage } = require("../controllers/uploadController");
// // // // // // const upload = require("../utils/multer");

// // // // // // // Authentication Routes
// // // // // // router.get("/", test);
// // // // // // router.post("/register", registerUser);
// // // // // // router.post("/login", loginUser);
// // // // // // router.get("/profile", getProfile);

// // // // // // router.post("/logout", (req, res) => {
// // // // // //   res.clearCookie("token");
// // // // // //   res.status(200).json({ message: "Logged out successfully" });
// // // // // // });

// // // // // // // Image Routes
// // // // // // router.get("/image/:id", getImage);
// // // // // // router.post("/upload", upload.single("image"), (req, res) => {
// // // // // //   req.body.userId = req.userId;  // Set userId from verified token
// // // // // //   uploadImage(req, res);
// // // // // // });

// // // // // // module.exports = router;
// // // // // const express = require("express");
// // // // // const router = express.Router();
// // // // // const {
// // // // //   test,
// // // // //   registerUser,
// // // // //   loginUser,
// // // // //   getProfile,
// // // // // } = require("../controllers/authController");

// // // // // const { uploadImage, getImage } = require("../controllers/uploadController");
// // // // // const upload = require("../utils/multer");
// // // // // const verifyToken = require("../middleware/verifyToken");

// // // // // // Auth
// // // // // router.get("/", test);
// // // // // router.post("/register", registerUser);
// // // // // router.post("/login", loginUser);
// // // // // router.get("/profile", getProfile);
// // // // // router.post("/logout", (req, res) => {
// // // // //   res.clearCookie("token");
// // // // //   res.status(200).json({ message: "Logged out successfully" });
// // // // // });

// // // // // // Image
// // // // // router.get("/image/:id", getImage);
// // // // // router.post("/upload", verifyToken, upload.single("image"), (req, res) => {
// // // // //   req.body.userId = req.userId;
// // // // //   uploadImage(req, res);
// // // // // });

// // // // // module.exports = router;
// // // // const express = require("express");
// // // // const router = express.Router();

// // // // const {
// // // //   test,
// // // //   registerUser,
// // // //   loginUser,
// // // //   getProfile,
// // // // } = require("../controllers/authController");

// // // // const { uploadImage, getImage } = require("../controllers/uploadController");
// // // // const upload = require("../utils/multer");
// // // // const verifyToken = require("../middleware/verifyToken");

// // // // // Auth routes
// // // // router.get("/", test);
// // // // router.post("/register", registerUser);
// // // // router.post("/login", loginUser);
// // // // router.get("/profile", verifyToken, getProfile);  // Profile usually protected
// // // // router.post("/logout", (req, res) => {
// // // //   res.clearCookie("token");
// // // //   res.status(200).json({ message: "Logged out successfully" });
// // // // });

// // // // // Image routes
// // // // router.get("/image/:id", getImage);
// // // // router.post("/upload", verifyToken, upload.single("image"), (req, res) => {
// // // //   req.body.userId = req.userId;  // Attach userId from token to req.body for controller
// // // //   uploadImage(req, res);
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const router = express.Router();
// // // const multer = require("multer");
// // // const path = require("path");

// // // const {
// // //   test,
// // //   registerUser,
// // //   loginUser,
// // //   getProfile,
// // //   uploadImage,
// // // } = require("../controllers/authController");

// // // // Multer config
// // // const storage = multer.diskStorage({
// // //   destination: function (req, file, cb) {
// // //     cb(null, "uploads/"); // ensure folder exists
// // //   },
// // //   filename: function (req, file, cb) {
// // //     const uniqueSuffix = Date.now() + path.extname(file.originalname);
// // //     cb(null, file.fieldname + "-" + uniqueSuffix);
// // //   },
// // // });
// // // const upload = multer({ storage });

// // // // Routes
// // // router.get("/", test);
// // // router.post("/register", registerUser);
// // // router.post("/login", loginUser);
// // // router.get("/profile", getProfile);
// // // router.post("/upload", upload.single("image"), uploadImage);
// // // router.post("/logout", (req, res) => {
// // //   res.clearCookie("token"); // Make sure "token" matches the cookie name you used in login
// // //   res.status(200).json({ message: "Logged out successfully" });
// // // });
// // // module.exports = router;
// // const express = require("express");
// // const router = express.Router();
// // const {
// //   test,
// //   registerUser,
// //   loginUser,
// //   getProfile,
// //   uploadImage,
// // } = require("../controllers/authController");
// // const upload = require("../utils/multer");

// // // Authentication Routes
// // router.get("/", test);
// // router.post("/register", registerUser);
// // router.post("/login", loginUser);
// // router.get("/profile", getProfile);
// // router.post("/logout", (req, res) => {
// //   res.clearCookie("token"); // Make sure "token" matches the cookie name you used in login
// //   res.status(200).json({ message: "Logged out successfully" });
// // });

// // // Image Upload Route
// // router.post("/upload", upload.single("image"), uploadImage);

// // module.exports = router;
//  const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");

// const {
//   test,
//   registerUser,
//   loginUser,
//   getProfile,
//   uploadImage,
// } = require("../controllers/authController");

// // Multer config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // ensure folder exists
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });
// const upload = multer({ storage });

// // Routes
// router.get("/", test);
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/profile", getProfile);
// router.post("/upload", upload.single("image"), uploadImage);
// router.post("/logout", (req, res) => {
//   res.clearCookie("token"); // Make sure "token" matches the cookie name you used in login
//   res.status(200).json({ message: "Logged out successfully" });
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  test,
  registerUser,
  loginUser,
  getProfile,
  uploadImage,
} = require("../controllers/authController");

// Multer config — use memoryStorage to forward file directly to Flask
const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
const upload = require("../utils/multer"); // path to your multer config file

// router.post("/upload", upload.single("image"), uploadImage);

// Routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/upload", upload.single("image"), uploadImage);
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
