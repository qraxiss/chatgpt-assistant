const logic = require('../../logic')
const { ahandler } = require('../../errors')


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
}

module.exports = Chat
