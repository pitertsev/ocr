const express = require('express')
const Text = require('../models/text.js')
const protectRouter = require('../middleware/protectRouter')

const router = express.Router()
router.get('/', protectRouter, async (req, res) => {
  const list = await Text.find({})
  if (req.user) {
    res.render('list', { name: req.user.login, list })
  } else {
    res.render('list', { name: null, list })
  }
  // res.render('list', { list })
})

module.exports = router
