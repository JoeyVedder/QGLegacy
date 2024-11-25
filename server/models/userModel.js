const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    points: { type: Number, default: 0 },
    socialMedia: {
        twitterFollow: { type: Boolean, default: false },
        instagramFollow: { type: Boolean, default: false },
        discordJoined: { type: Boolean, default: false }
    }
});

module.exports = mongoose.model('User', userSchema);