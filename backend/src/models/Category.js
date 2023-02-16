const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    slug: {type: String, required: false},
    type: {type: mongoose.Schema.Types.String, required: false},
    parentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
}, {timestamps: true})

module.exports = mongoose.model('Category', categorySchema)