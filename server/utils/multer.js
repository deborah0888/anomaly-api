// // // const multer = require('multer');

// // // Multer Storage (Use memory storage for Cloudinary)
// // const storage = multer.memoryStorage();

// // // File Filter (Only allow images)
// // const fileFilter = (req, file, cb) => {
// //   const allowedTypes = /jpeg|jpg|png/;
// //   const mimetype = allowedTypes.test(file.mimetype);

// //   if (extname && mimetype) {
// //     return cb(null, true);
// //   } else {
// //     return cb(new Error('Only images (JPEG, JPG, PNG) are allowed!'), false);
// //   }
// // };

// // // Upload Instance
// // const upload = multer({ storage, fileFilter });

// // module.exports = upload;
// const multer = require('multer');
// const path = require('path');

// // Storage Configuration (Using Memory Storage for Cloudinary)
// const storage = multer.memoryStorage();

// // File Filter (Only allow images)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     return cb(new Error('Only images (JPEG, JPG, PNG) are allowed!'));
//   }
// };

// // Upload Instance
// const upload = multer({ storage, fileFilter });

// module.exports = upload;
const multer = require('multer');
const path = require('path');

// Storage Configuration (Memory Storage for Cloudinary)
const storage = multer.memoryStorage();

// File Filter (Only allow images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb(new Error('Only images (JPEG, JPG, PNG) are allowed!'));
  }
};

// Upload Instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
