const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_type: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('Users', UserSchema);