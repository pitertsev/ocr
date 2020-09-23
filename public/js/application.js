// const form = document.querySelector('#send-image')
// // const imageDiv = document.querySelector('.image')

// form.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const file = document.getElementById('file').files[0]
//   if (!file) return

//   const { method, action } = form

//   // console.log(file)

//   const response = await fetch(action, {
//     method,
//     headers: { 'Content-type': 'Application/json' },
//     body: JSON.stringify({ form: new FormData(form) }),
//   })

//   // const text = response.text()
// })

// function speak(text) {
//   const message = new SpeechSynthesisUtterance()
//   message.lang = 'ru-RU'
//   message.text = text
//   window.speechSynthesis.speak(message)
// }

// speak('йцуйцуйцфывфсывсывс')
