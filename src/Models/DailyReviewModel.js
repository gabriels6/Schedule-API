const mongoose = require('mongoose');

const DailyReviewSchema = new mongoose.Schema({
    Author_Id: String,
    Date: String,
    Review: String,
});

module.exports = mongoose.model('DailyReview',DailyReviewSchema);