const express = require('express')
const { getAllCategories } = require('../../controllers/categoriesController')
const router = express.Router()

router.get('/get', getAllCategories)

module.exports = ('categoriesRoutes', router)