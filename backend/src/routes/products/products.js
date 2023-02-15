const express = require('express')
const { getAllCategories } = require('../../controllers/categoriesController')
const { getAllProducts, getProductsInCategory } = require('../../controllers/productController')
const router = express.Router()


router.get('/all', getAllProducts)
router.get('/categories', getAllCategories)
router.get('/:category', getProductsInCategory)


module.exports = ('productsRoutes', router)
