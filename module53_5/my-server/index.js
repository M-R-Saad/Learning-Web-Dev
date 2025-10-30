const express = require('express')
const phones = require("./phones.json")
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World Now!')
})

app.get('/phones', (req, res) => {
  res.json(phones)
})

app.get('/phones/:id', (req, res) => {
  const id = req.params.id
  const phone = phones.find(p => p.id === parseInt(id))
  if (phone) {
    res.json(phone)
  } else {
    res.status(404).send('Phone not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
