const router = require('express').Router()
const { readImage } = require('../middleware/tesseract')
const Text = require('../models/text')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const img = req.files.file.data // Buffer
  const text = await readImage(img, 'rus')

  await new Text({ text }).save()

  res.json({ text })
})

module.exports = router
