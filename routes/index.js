const router = require('express').Router()
const { readImage } = require('../middleware/tesseract')
const Text = require('../models/text')

router.route('/')
  .get((req, res) => {
    res.render('index')
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
      await new Text({ text }).save()
      res.json({ text }).end()
    }
  } catch (error) {
    console.log(error)
    res.send('Не удалось распознать файл!').end()
  }
})

module.exports = router
