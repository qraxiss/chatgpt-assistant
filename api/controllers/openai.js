const logic = require('../../logic')
const { ahandler } = require('../../errors')


class OpenAi {
    @ahandler
    static async get(req, res, next) {
        const comp =  await logic.openai.get(req.body)
        res.json(comp)
    }
}

module.exports = OpenAi