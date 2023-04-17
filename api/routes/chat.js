const {Router} = require('express')
const controller = require('../controllers/chat')
const openaiController = require('../controllers/openai')
const router = Router()

router.post('/', controller.create)
router.patch('/', controller.update)
router.delete('/', controller.remove)
router.get('/', controller.get)

module.exports = router