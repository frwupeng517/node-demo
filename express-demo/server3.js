const express = require('express')
const exStatic = require('express-static')

const app = express()

var users = {
  'aaa': '123456',
  'bbb': '654321'
}

app.use('/login', function(req, res) {
  console.log(req)
})

app.listen(8080)