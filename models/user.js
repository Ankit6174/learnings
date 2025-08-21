const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: Number,
        unique: true,
        require: true
    }
});

module.exports = mongoose.model('user', userSchema);