const express = require('express')
const userMiddleware = require('./middleware')

const indexRouter = require('./routes/index')

const app = express()
userMiddleware(app)

app.use('/', indexRouter)

module.exports = express
