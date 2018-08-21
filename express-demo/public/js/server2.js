const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(8080)

app.use(bodyParser.urlencoded({
  extended: false,
  limit: 2*1024
}))

app.use('/', function(req, res){
  console.log(req.body) // { username: 'sansa', pwd: '3333' }
})

