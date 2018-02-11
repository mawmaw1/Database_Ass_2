const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    polarity: Number,
    id: Number,
    date: Date,
    query: String,
    user: String,
    text: String
})

module.exports = mongoose.model('Tweet', tweetSchema)