const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const message = Joi.object({
  role: Joi.string().required(),
  content: Joi.string().required()
})

const create = Joi.object({
  id: Joi.string().required(),
  message : message.required()
  }
)

const new_msg = Joi.object({
  id: Joi.string().required(),
  message : message.required()
  }
)

const get = Joi.object({
  id: Joi.string().required()
})

const remove = Joi.object({
  id: Joi.string().required()
})


module.exports = {
  create,
  new_msg,
  get,
  remove,
  message
}


