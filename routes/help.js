const router = require('express').Router()
const sms = require('../middleware/sms')

router.get('/', async (req, res) => {
  const id = await sms.send({
    to: '89118483609',
    text: 'Бабушке плохо!',
    from: 'GmAssistant',
    translit: false,
  }, (err) => {
    if (err) {
      console.log(err.message)
      res.status(404).end()
    }
  })
  res.status(200).end()
})

module.exports = router
