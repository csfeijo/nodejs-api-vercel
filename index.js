const express = require('express')

const app = express()
const PORT = 80

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Bombando na Azion')
})

app.get('/repos', (req, res) => {
  res.send('Pegando os REPOS')
})

// Export the Express API
module.exports = app