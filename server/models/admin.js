// // models/adminUser.js
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const adminUserSchema = new Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String, // If you need authentication for admin login
// });

// const AdminUser = mongoose.model('AdminUser', adminUserSchema);
// module.exports = AdminUser;
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Admin", adminSchema);
