const express = require('express')
const router = express.Router()
const {signIn, signUp, userActive} = require('../../controllers/signingController')


router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.get('/user-active/:token', userActive)


module.exports = router
