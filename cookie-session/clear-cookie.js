const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use('/', function(req, res) {
  res.clearCookie('username')
  res.clearCookie('password')


  res.send('删除cookie')
})

app.listen(8088)