const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    slug: {type: mongoose.Schema.Types.String, required: false},
    type: {type: mongoose.Schema.Types.String, required: false},
}, {timestamps: true})

module.exports = mongoose.model('Category', categorySchema)