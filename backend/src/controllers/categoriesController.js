const Category = require('../models/Category')

exports.getAllCategories = (req, res, status)=>{
    try{
        Category.find({}).populate('parentId').exec().then(categories=>{
            return res.status(200).json({
                categories
            })
        })
    }
    catch(e){
        res.status(400).json({
            error: e
        })
    }
}