const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true} ,
    addr: [{
        type: mongoose.Schema.Types.ObjectId, ref:'address'
    }],
    order: [{
        type: mongoose.Schema.Types.ObjectId, ref:'orders'
    }]
})

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("User", userSchema)

