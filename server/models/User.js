/* Import Mongoose */
const mongoose = require('mongoose');

/* Define Schema */
const Schema = mongoose.Schema;

/* Define UserSchema */
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

/* Export User model */
module.exports = mongoose.model('User', UserSchema);