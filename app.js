const express = require('express')
const userMiddleware = require('./middleware')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const listRouter = require('./routes/list')

const app = express()
userMiddleware(app)

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/list', listRouter)

module.exports = app
