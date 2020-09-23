const express = require('express')
const Text = require('../models/text.js')

const router = express.Router()
router.get('/', async (req, res) => {
  const list = await Text.find({})
  res.render('list', { list })
})

module.exports = router
