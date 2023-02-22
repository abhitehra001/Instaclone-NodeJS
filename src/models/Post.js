const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    postimage: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = mongoose.model("posts", Post);