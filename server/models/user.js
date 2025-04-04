// const mongoose = require('mongoose')
// const {Schema}= mongoose
// const userSchema=new Schema({
//     name: String,
//     email: {
//         type: String,
//         unique: true
//     },
//     password: String
// })

// const UserModel=mongoose.model('User',userSchema);
// module.exports=UserModel;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  imageUrl: String, // Add this field to store the Cloudinary URL
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;