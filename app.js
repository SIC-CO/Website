const http = require('http')
const port = 8080
const express = require("express")
const app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.get('/arib', (req,res) => {
    res.sendFile(__dirname+'/index.html')
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
