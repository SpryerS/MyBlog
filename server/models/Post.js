/* Import Mongoose */
const mongoose = require('mongoose');

/* Define Schema */
const Schema = mongoose.Schema;

/* Define PostSchema */
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

/* Export Post model */
module.exports = mongoose.model('Post', PostSchema);