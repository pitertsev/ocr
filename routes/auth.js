const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.render('auth')
  })
  .post((req, res) => {
    res.redirect('/')
  })

module.exports = router
