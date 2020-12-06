const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username:String,
    Password:String,
});

module.exports = mongoose.model('User',UserSchema);