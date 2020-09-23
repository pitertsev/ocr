const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../models/user')

module.exports = passport.use(new Strategy(
  (username, password, done) => {
    User.findOne({ login: username }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false)
      }
      if (!user.password) {
        return done(null, false)
      }
      return done(null, user)
    })
  },
))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err)
    }
    return cb(null, user)
  })
})
