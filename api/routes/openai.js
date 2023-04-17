const { Router } = require('express')
const controller = require('../controllers/openai')

const router = Router()

router.get('/', controller.get)

module.exports = router