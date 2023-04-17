const getAiAnswer = require('../helpers/openai')
const chat = require('./chat')
const validators = require('../validators')


async function get(params) {
    const { value, error } = validators.validate(params, validators.chats.get)
    if (error) throw new Error(error)

    const messages = await chat.get(value)
    const completion = await getAiAnswer(messages.result.history)
  
    return completion
  }


module.exports = {
    get
}