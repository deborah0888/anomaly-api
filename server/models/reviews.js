// const reviewSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     rating: { type: Number, required: true, min: 1, max: 5 },
//     comment: { type: String, required: true },
//     submittedAt: { type: Date, default: Date.now },
//   });
//   const Review = mongoose.model('Reviews', reviewSchema);
const mongoose = require('mongoose'); // Import mongoose

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema); // Use singular 'Review'

module.exports = Review; // Export the model
