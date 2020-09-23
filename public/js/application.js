const form = document.querySelector('#send-image')
const readBtn = document.querySelector('#read-btn')
const stopBtn = document.querySelector('#cancel-read')
let text = ''
const textContainer = document.querySelector('#text-container')
const synth = window.speechSynthesis

function speak(text) {
  const message = new SpeechSynthesisUtterance()
  message.lang = 'ru-RU'
  message.text = text
  synth.speak(message)
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  textContainer.innerHTML = ''
  const file = document.getElementById('file').files[0]
  if (!file) return

  const { method, action } = form

  const data = new FormData()
  data.append('file', file)

  const response = await fetch(action, {
    method,
    body: data,
  })

  const answer = await response.json()
  text = answer.text.split('\n')
  text.forEach((el) => {
    textContainer.innerHTML += `${el}<br>`
  })
  form.reset()
})

readBtn.addEventListener('click', () => {
  speak(text)
})

stopBtn.addEventListener('click', () => {
  synth.cancel()
})
