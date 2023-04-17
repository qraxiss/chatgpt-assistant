const Joi = require('joi')

const message = require('./chat').message

const messages = Joi.object({
    messages: Joi.array().required()
})

module.exports = {
    messages
}