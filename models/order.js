const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    qty: {type: Number},
    at: {type: String}
})

module.exports = mongoose.model("orders", schema)