const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    Author_Id: String,
    Title: String,
    Content: String,
    Date:String,
    StartTaskTime: String,
    EndTaskTime: String,
    Urgency:String,
});

module.exports = mongoose.model('Note',NoteSchema);