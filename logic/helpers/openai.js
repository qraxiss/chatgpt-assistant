const DotEnv = require('dotenv') // Environment file
DotEnv.config({ path: __dirname + '/.env' }) // Read config file



const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI,
});

const openai = new OpenAIApi(configuration);



async function getAiAnswer(messages) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: 'user', content: process.env.ASSISTAN_MESSAGE}, ...messages],
    });

    return completion
}

module.exports = getAiAnswer
