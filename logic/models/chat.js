const database = require('../../database')
const validators = require('../validators')

async function create(params) {
  const { value, error } = validators.validate(params, validators.chats.create)
  if (error) throw new Error(error)

  const result = await database.chats.create({ id: value.id, history: [value.message] })
  return { result: result }
}

async function get(params) {
  const { value, error } = validators.validate(params, validators.chats.get)
  if (error) throw new Error(error)

  const result = await database.chats.findOne(value)
  return { result: result }
}

async function update(params) {
  const { value, error } = validators.validate(params, validators.chats.new_msg)
  // console.log(params)
  if (error) throw new Error(error)

  const result = await database.chats.updateOne(
    { id: value.id },
    { $push: { history: value.message } }
  );

  return { result: result }
}

async function remove(params) {
  const { value, error } = validators.validate(params, validators.chats.remove)
  if (error) throw new Error(error)

  const result = await database.chats.deleteOne(value)
  return { result: result }
}

module.exports = {
  create,
  get,
  update,
  remove
}
