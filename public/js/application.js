const form = document.querySelector('#send-image')
// const imageDiv = document.querySelector('.image')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const file = document.getElementById('file').files[0]
  if (!file) return

  const { method, action } = form

  const data = new FormData()
  data.append('file', file)

  const response = await fetch(action, {
    method,
    body: data,
  })

  const { text } = await response.json()
  function speak(text) {
    const message = new SpeechSynthesisUtterance()
    message.lang = 'ru-RU'
    message.text = text
    window.speechSynthesis.speak(message)
  }

  speak(text)
})
