// const contactSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     message: { type: String, required: true },
//     submittedAt: { type: Date, default: Date.now },
//   });
//   const Contact = mongoose.model('Contact', contactSchema);
const mongoose = require('mongoose'); // Import mongoose

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
