const express = require('express')
const router = express.Router()

const {GenToken} = require('../controllers/imageHandle')

router.get('/image_auth',GenToken)

module.exports = router