const Product = require('../models/Product')


exports.getAllProducts = (req, res, status)=>{
    try{
        Product.find({}).exec().then(products=>{
            if(products){
                return res.status(200).json({
                    products
                })
            }
            else{
                throw new Error('Error while downloading products')
            }
        })
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}

exports.getProductsInCategory = async(req, res, status)=>{
    try{
        let products = []
        products=await Product.find({})
        .populate({path: 'category', select: '_id name',populate: {path: 'parentId', select: '_id name'}}).exec()
        products = products.filter(product=>{
            if(product.category._id==req.params.category){
                return true
            }
            if(product.category.parentId){
                if(product.category.parentId._id==req.params.category){
                    return true
                }
                if(product.category.parentId.parentId){
                    if(product.category.parentId.parentId._id==req.params.category){
                        return true
                    }
                }
            }
            return false
        })
        return res.status(200).json({products})    
    }
    catch(e){
        return res.status(400).json({
            error: e
        })
    }
}

exports.addNewProduct = (req, res, status)=>{
    try{
        const {name, slug, price, quantity, description, category, createdBy, 
            productPictures, reviews} = req.body
        const product = new Product({name, slug, price, quantity, description, category,
            createdBy, productPictures, reviews})
        product.save().then(result=>{
            return res.status(200).json({
                message: "Product added",
                product: result
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