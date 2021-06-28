const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    street: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
})

module.exports = mongoose.model("Address", schema)