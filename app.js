const express = require('express')
const userMiddleware = require('./middleware')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const listRouter = require('./routes/list')
const helpRouter = require('./routes/help')

const app = express()
userMiddleware(app)

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/list', listRouter)
app.use('/help', helpRouter)

module.exports = app
