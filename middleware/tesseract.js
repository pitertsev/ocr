const { createWorker } = require('tesseract.js')

const worker = createWorker()

async function readImage(file, lang) {
  await worker.load()
  await worker.loadLanguage(lang)
  await worker.initialize(lang)
  const { data: { text } } = await worker.recognize(file)
  return text
}

module.exports = { readImage }
