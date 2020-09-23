const passport = require('passport')
const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.render('auth')
  })
  .post(
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/error',
    }),
    (req, res) => {
      res.redirect('/')
    },
  )

module.exports = router
