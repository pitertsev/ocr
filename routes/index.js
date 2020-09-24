const router = require('express').Router()
const { readImage } = require('../middleware/tesseract')
const Text = require('../models/text')

router.route('/')
  .get((req, res) => {
    if (req.user) {
      res.render('index', { name: req.user.login })
    } else {
      res.render('index', { name: null })
    }
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

router.post('/', async (req, res) => {
  try {
    const img = req.files.file.data
    if (img) {
      const text = await readImage(img, 'rus')
      const dateNow = new Date()
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }
      const date = dateNow.toLocaleString('ru', options)
      await new Text({ text, date }).save()
      res.json({ text }).end()
    }
  } catch (error) {
    console.log(error)
    res.send('Не удалось распознать файл!').end()
  }
})

module.exports = router
