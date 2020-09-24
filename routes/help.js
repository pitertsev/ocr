const router = require('express').Router()
const sms = require('../middleware/sms')

router.get('/', async (req, res) => {
  try {
    await sms.send({
      to: '89118483609',
      text: 'Бабушке плохо!',
      from: 'Бабушка',
      test: false,
      translit: false,
    })
    res.send('Сообщение отправлено!').end()
  } catch (err) {
    res.send('Сообщение не отправлено!').end()
  }
})

module.exports = router
