const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = 80

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Bombando na Azion')
})

app.get('/repos', (req, res) => {
  
  res.write('DATA ')

  
  try {
    res.write(process.env.NAME)
  } catch (e) {
    res.write('VAR - Not available')
  }

  res.end()
})

// Export the Express API
module.exports = app