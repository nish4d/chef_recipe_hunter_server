const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const chefData = require('./data/data.json')
const postData = require('./data/postData.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server Running!')
})

app.get('/chef', (req, res) => {
    res.send(chefData)
})


app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefData.find(chef => parseInt(chef.id) === id)
    res.send(chef)
})

app.get('/post', (req, res) => {
  res.send(postData)
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})