const logic = require('../../logic')
const { ahandler } = require('../../errors')
const { messages } = require('../../logic/validators/openai')


class Chat {
  @ahandler
  static async create(req, res, next) {
    res.json(await logic.chat.create(req.body))
  }

  @ahandler
  static async get(req, res, next) {
    res.json(await logic.chat.get(req.body))
  }

  @ahandler
  static async update(req, res, next) {
    res.json(await logic.chat.update(req.body))
  }

  @ahandler
  static async remove(req, res, next) {
    res.json(await logic.chat.remove(req.body))
  }

  @ahandler
  static async chat(req, res, next) {
    const history = (await logic.chat.get({
      id: req.body.id
    })).result.history
    
    const messages = await logic.openai.get({
      messages: [...history, req.body.message]
    })

    await logic.chat.update({
      id: req.body.id,
      message : req.body.message
    })
    await logic.chat.update({
      id: req.body.id,
      message : messages[messages.length-1]
    })

    res.json(messages)

  }
}

module.exports = Chat
