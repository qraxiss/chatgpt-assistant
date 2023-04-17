const logic = require('../../logic')
const { ahandler } = require('../../errors')


class OpenAi {
    @ahandler
    static async get(req, res, next) {
        const comp = await logic.openai.get(req.body)
        const msg = comp.data.choices[0].message
        logic.chat.update({
            id: req.body.id,
            message: msg
        })
        res.json(msg)
    }
}

module.exports = OpenAi