<<<<<<< HEAD
=======
const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is started: http://localhost:${PORT}`)
})
>>>>>>> c37f92f3f539d8ff88cd0f34f4d2deddba35792c
