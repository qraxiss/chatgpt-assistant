const {Router} = require('express')
const controller = require('../controllers/chat')

const router = Router()

router.post('/', controller.create)
router.patch('/', controller.update)
router.delete('/', controller.remove)
router.get('/', controller.get)
router.post('/chat', controller.chat)


module.exports = router