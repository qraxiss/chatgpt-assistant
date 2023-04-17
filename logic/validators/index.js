const chats = require('./chat')
const openai = require('./openai')

const validate = (params, validator) => {
  const { value, error } = validator.validate(params)
  if (error) return { value, error: error.message }

  return { value }
}

module.exports = {
  validate,
  chats,
  openai
}
