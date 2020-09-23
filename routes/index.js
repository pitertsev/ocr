const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.route('/error')
  .get((req, res) => {
    res.render('error')
  })

module.exports = router
