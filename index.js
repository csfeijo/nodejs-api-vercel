const express = require('express')
const axios = require('axios')
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

app.get('/variables', (req, res) => {  
  res.write('ENV VARIABLES ')

  try {
    res.write(process.env.NAME)
  } catch (e) {
    res.write('VAR - Not available')
  }
  res.end()
})


app.get('/repos/:user', (req, res) => {
  const { user } = req.params
  const base = 'https://api.github.com'

 
  const hostname = `${base}/users/${user}/repos`;
   
  axios.get(hostname)
    .then(response => {
      //console.log(response.data)
      res.json(response.data)
    })
    .catch(error => console.log(error))
})


// Export the Express API
module.exports = app