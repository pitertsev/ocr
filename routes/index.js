const router = require('express').Router()
const path = require('path')
const { readImage } = require('../middleware/tesseract')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  // console.log(req.files)
  const img = req.files.file.data // Buffer
  // const img = req.body // Buffer
  // const testFile = path.join(__dirname, '..', 'public', 'img', 'img.png')
  const text = await readImage(img, 'rus')
  console.log(text)
})

module.exports = router
