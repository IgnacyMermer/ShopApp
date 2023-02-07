const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true, lowercase: true, min: 3, max: 20},
    email: {type: String, required: true, unique:true, lowercase: true},
    hashPassword: {type: String, required: true,min: 5, max: 20},
    role: {type: String, enum: ['User', 'Admin'], default: 'User'},
    contactNumber: {type: String},
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
