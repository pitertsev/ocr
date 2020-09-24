const passport = require('passport')
const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.render('auth')
  })
  .post(
    passport.authenticate('local', {
      successRedirect: '/list',
      failureRedirect: '/error',
      failureFlash: true,
      session: true,
    }),
  )

module.exports = router
