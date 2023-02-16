const Category = require('../models/Category')

exports.getAllCategories = (req, res, status)=>{
    try{
        Category.find({}).populate('parentId', '_id name').select('_id name slug').exec().then(categories=>{
            return res.status(200).json({
                categories
            })
        })
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}

exports.addNewCategory = (req, res, status)=>{
    try{
        const {name, slug, parentId} = req.body;
        const category = new Category({name, slug, parentId})
        category.save().then(result=>{
            return res.status(200).json({
                message: 'Category added',
                category: result
            })
        }).catch(error=>{
            return res.status(400).json({
                error
            })
        })
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}