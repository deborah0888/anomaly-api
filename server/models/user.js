const mongoose = require('mongoose');
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
      anomalyScore: Number,
      isAnomalous: Boolean,
      uploadedAt: { type: Date, default: Date.now },
    }
  ],
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;