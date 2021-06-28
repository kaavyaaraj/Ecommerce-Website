const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    feedback: { type: String, required: true },
    user: {type: String, required: true}
})

module.exports = mongoose.model("feedback", schema)