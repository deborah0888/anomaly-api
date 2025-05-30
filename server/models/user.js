// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String,
//   images: [
//     {
//       imageUrl: String,
//       anomalyScore: Number,
//       isAnomalous: Boolean,
//       uploadedAt: { type: Date, default: Date.now },
//     },
//   ],
// });

// const UserModel = mongoose.model("User", userSchema);
// module.exports = UserModel;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  images: [
    {
      imageUrl: String,
      isAnomalous: Boolean,
      category: String, // 🆕 added category
      predictedClass: String, // 🆕 added predicted class
      confidenceScore: Number, // 🆕 added confidence score
      uploadedAt: { type: Date, default: Date.now },
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
