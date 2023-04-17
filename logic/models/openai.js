const getAiAnswer = require('../helpers/openai')
const validators = require('../validators')


async function get(params) {
    const { value, error } = validators.validate(params, validators.openai.messages)
    if (error) throw new Error(error)
  
    return await getAiAnswer(value.messages)
  }

module.exports = {
    get
}