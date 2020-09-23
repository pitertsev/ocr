const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
