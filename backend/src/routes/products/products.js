const express = require('express')
const { getAllCategories } = require('../../controllers/categoriesController')
const { getAllProducts, getProductsInCategory, addNewProduct } = require('../../controllers/productController')
const router = express.Router()


router.get('/all', getAllProducts)
router.get('/categories', getAllCategories)
router.get('/:category', getProductsInCategory)

router.post('/add', addNewProduct)


module.exports = ('productsRoutes', router)
