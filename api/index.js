//Require dependencies
const Express = require('express') // Http server
const Morgan = require('morgan') // Terminal logging
const { status500 } = require('../errors') // Error Models
const { MongoConnection } = require('../logic') //Express session manager

const getAiAnswer = require('../logic/helpers/openai')

// getAiAnswer([
//   {
//       "role": "user",
//       "content": "deneme mesaj"
//   }
// ]).then((res) => {
//   console.log(res.data.choices[0].message)
// })

//Initilaziation
const app = Express()

// Session Start
console.log('DB => MongoStore initalized')

//Middlewares
app.use(Morgan('dev'))
app.use(Express.json({ limit: '10mb' }))


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH')
  next()
})

//Require routes
const chatRouter = require('./routes/chat')
const openaiRouter = require('./routes/openai')

//Routes
app.use('/chat', chatRouter)
app.use('/openai', openaiRouter)

//Error Handling
app.use(status500)

//Listen for requests
app.listen(process.env.PORT, console.log('API => Listening on port %s', process.env.PORT))
