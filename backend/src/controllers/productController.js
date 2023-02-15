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
        products=products.concat(await Product.find({category: req.params.category}).exec())
        products=products.concat(await Product.find({'parentId.category': req.params.category}).exec())
        products=products.concat(await Product.find({'parentId.parentId.category': req.params.category}).exec())
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
        const {name, shortName, price, quantity, description, category, createdBy, 
            productPictures, reviews} = req.body
        const product = new Product(name, shortName, price, quantity, description, category,
            createdBy, productPictures, reviews)
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