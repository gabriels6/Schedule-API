const mongoose = require('mongoose')

const TaskLogSchema = new mongoose.Schema({
    User_id: String,
    Description: String,
    Timestamp: String,
});

module.exports = mongoose.model('TaskLog',TaskLogSchema);