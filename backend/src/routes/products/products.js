const express = require('express')
const { getAllCategories } = require('../../controllers/categoriesController')
const { getAllProducts } = require('../../controllers/productController')
const router = express.Router()


router.get('/all', getAllProducts)
router.get('/categories', getAllCategories)

module.exports = ('productsRoutes', router)
