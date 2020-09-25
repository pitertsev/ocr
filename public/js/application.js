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
const voicesSelect = document.querySelector('#voices')
const sel = document.querySelector('#sel')
const upBtn = document.querySelector('.up-btn')
let text = ''
let voices = []

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav')
  const instances = M.Sidenav.init(elems)
})

function speak(text) {
  const message = new SpeechSynthesisUtterance()
  message.lang = 'ru-RU'
  message.text = text
  message.voice = voices[voicesSelect.value]
  synth.speak(message)
}

function generateVoices() {
  voices = speechSynthesis.getVoices()
  voices = voices
    .filter((voice) => voice.lang === 'ru-RU')
  voices.pop()
  const voiceList = voices.map((voice, index) => `<option value="${index}">${voice.name} ${voice.lang}</option>`).join('')
  voicesSelect.innerHTML = voiceList
  const elems = document.querySelectorAll('select')
  const instances = M.FormSelect.init(elems)
}

function hideElement(...elems) {
  elems.forEach((el) => {
    el.classList.remove('show')
    el.classList.add('hide')
  })
}

function showElement(...elems) {
  elems.forEach((el) => {
    el.classList.remove('hide')
    el.classList.add('show')
  })
}

if (voicesSelect) {
  speechSynthesis.addEventListener('voiceschanged', generateVoices)
}

if (selFile) {
  selFile.addEventListener('change', (e) => {
    if (textContainer.classList.contains('show')) {
      hideElement(bottomBtns, textContainer, sel)
    }
    selFile.parentElement.classList.remove('pulse')
    img.innerHTML = ''
    showElement(startBtn)
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = ((f) => function (ev) {
      const span = document.createElement('span')
      span.innerHTML = ['<img class="thumb" title="', escape(f.name), '" src="', ev.target.result, '"style="width:100%"', ' />'].join('')
      img.insertBefore(span, null)
    })(file)
    reader.readAsDataURL(file)
  }, false)
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    textContainer.innerHTML = ''
    const file = document.getElementById('file').files[0]
    if (!file) return
    const btnU = document.querySelector('.scroll-to')
    btnU.classList.remove('pulse')

    const { method, action } = form

    const data = new FormData()
    data.append('file', file)

    showElement(progress)

    const response = await fetch(action, {
      method,
      body: data,
    })

    const answer = await response.json()
    hideElement(progress)
    showElement(bottomBtns, textContainer, sel)
    setTimeout(() => {
      document.documentElement.scrollTop = btnU.offsetTop + btnU.offsetHeight + 10
    })

    text = answer.text.split('\n')
    text.forEach((el) => {
      if (el !== '') {
        textContainer.innerHTML += `${el}<br>`
      }
    })
    form.reset()
  })
}

if (readBtn) {
  readBtn.addEventListener('click', (e) => {
    e.target.classList.remove('pulse')
    speak(text)
  })
}

if (stopBtn) {
  stopBtn.addEventListener('click', () => {
    synth.cancel()
  })
}

setInterval(() => {
  if (document.documentElement.scrollTop > 100) {
    showElement(upBtn)
  } else {
    hideElement(upBtn)
  }
})

upBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})
