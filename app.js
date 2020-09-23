const express = require('express')
const userMiddleware = require('./middleware')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')

const app = express()
userMiddleware(app)

app.use('/', indexRouter)
app.use('/auth', authRouter)

module.exports = app
