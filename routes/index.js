const router = require('express').Router()
const path = require('path')
const { readImage } = require('../middleware/tesseract')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const img = req.files.file.data // Buffer
  const text = await readImage(img, 'rus')
  res.json({ text })
})

module.exports = router
