const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const message = Joi.object({
  role: Joi.string().allow(null, '').required(),
  content: Joi.string().allow(null, '').required()
})

const create = Joi.object({
  id: Joi.string().allow(null, '').required(),
  message : message
  }
)

const new_msg = Joi.object({
  id: Joi.string().allow(null, '').required(),
  message : message.required()
  }
)

const get = Joi.object({
  id: Joi.string().allow(null, '').required()
})

const remove = Joi.object({
  id: Joi.string().allow(null, '').required()
})


module.exports = {
  create,
  new_msg,
  get,
  remove,
  message
}


