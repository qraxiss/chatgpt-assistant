const { Schema, model } = require('mongoose');
const { softDeletePlugin } = require('soft-delete-plugin-mongoose')

const messageSchema = new Schema({
    role: String,
    content: String
}, { _id: false });

const chatSchema = new Schema({
    history: {
        type: [messageSchema],
        required: true,
        default: []
    },
    id: {
        type: String,
        required: true
    }
});

chatSchema.plugin(softDeletePlugin)

const chats = model('chats', chatSchema)

module.exports = chats