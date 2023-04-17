const Joi = require('joi')

const messages = Joi.object({
    messages: Joi.array().required()
})

module.exports = {
    messages
}