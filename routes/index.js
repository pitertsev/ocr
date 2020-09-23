const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.render('index', { name: req.user.login })
  })

router.route('/error')
  .get((req, res) => {
    res.render('error')
  })

router.route('/logout')
  .get((req, res) => {
    req.session.destroy()
    res.clearCookie('user_id')
    res.redirect('/auth')
  })

module.exports = router
