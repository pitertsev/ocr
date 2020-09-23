const express = require('express')
const Text = require('../models/text.js')

const router = express.Router()
router.get('/', async (req, res) => {
  const texts = await Text.find({})
  res.json(texts)
})

module.exports = router
