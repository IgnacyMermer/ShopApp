const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    slug: {type: mongoose.Schema.Types.String, required: false},
    price: {type: mongoose.Schema.Types.Number, required: false},
    quantity: {type: mongoose.Schema.Types.Number, required: false},
    description: {type: mongoose.Schema.Types.String, required: false},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
    productPictures: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductImage'}],
    review: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductReview'}],
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)