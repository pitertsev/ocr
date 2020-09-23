const router = require('express').Router()
const { readImage } = require('../middleware/tesseract')
const Text = require('../models/text')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    const img = req.files.file.data
    if (img) {
      const text = await readImage(img, 'rus')
      await new Text({ text }).save()
      res.json({ text })
    }
  } catch (error) {
    console.log(error)
    res.send('Не удалось распознать файл!').end()
  }
})

module.exports = router
