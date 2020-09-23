const express = require('express')
const Text = require('../models/text.js')
const protectRouter = require('../middleware/protectRouter')

const router = express.Router()
router.get('/', protectRouter, async (req, res) => {
  const list = await Text.find({})
  res.render('list', { list })
})

module.exports = router
