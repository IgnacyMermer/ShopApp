const express = require('express')
const { getAllCategories, addNewCategory } = require('../../controllers/categoriesController')
const router = express.Router()


router.get('/get', getAllCategories)

router.post('/add', addNewCategory)


module.exports = ('categoriesRoutes', router)
