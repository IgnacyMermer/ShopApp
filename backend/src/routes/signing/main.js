const express = require('express')
const router = express.Router()
const {signIn} = require('../../controllers/signingController')



router.post('/signIn', signIn)

module.exports = router
