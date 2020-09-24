const form = document.querySelector('#form-file')
const readBtn = document.querySelector('#read-btn')
const stopBtn = document.querySelector('#cancel-read')
const textContainer = document.querySelector('#text-container')
const synth = window.speechSynthesis
const progress = document.querySelector('.progress')
const bottomBtns = document.querySelector('.btn-bottom')
const selFile = document.querySelector('#file')
const startBtn = document.querySelector('#start')
const img = document.querySelector('.img')
let text = ''

function speak(text) {
  const message = new SpeechSynthesisUtterance()
  message.lang = 'ru-RU'
  message.text = text
  synth.speak(message)
}

selFile.addEventListener('change', (e) => {
  img.innerHTML = ''
  startBtn.classList.add('show')
  startBtn.classList.remove('hide')
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = ((f) => function (ev) {
    const span = document.createElement('span')
    span.innerHTML = ['<img class="thumb" title="', escape(f.name), '" src="', ev.target.result, '"style="width:100%"', ' />'].join('')
    img.insertBefore(span, null)
  })(file)
  reader.readAsDataURL(file)
}, false)

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  textContainer.innerHTML = ''
  const file = document.getElementById('file').files[0]
  if (!file) return

  const { method, action } = form

  const data = new FormData()
  data.append('file', file)

  progress.classList.add('show')
  progress.classList.remove('hide')

  const response = await fetch(action, {
    method,
    body: data,
  })

  const answer = await response.json()
  progress.classList.add('hide')
  progress.classList.remove('show')
  bottomBtns.classList.remove('hide')
  bottomBtns.classList.add('show')

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
