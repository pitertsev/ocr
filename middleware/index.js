module.exports = function (app) {
  const express = require('express')
  const path = require('path')
  const cookieParser = require('cookie-parser')
  const session = require('express-session')
  const FileStore = require('session-file-store')(session)
  const dbConnection = require('./db-connect')
  const passport = require('./passport')

  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '..', 'views'))

  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(
    session({
      store: new FileStore(),
      key: 'user_id',
      secret: 'AX&am&Qb/fasy+h',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 600000,
      },
    }),
  )
}
