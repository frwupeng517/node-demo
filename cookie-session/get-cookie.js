const express = require('express')
const cookieParser = require('cookie-parser')  // 读取cookie
const app = express()

app.use(cookieParser())

app.use('/', function(req, res) {
  console.log(req.cookies)   // { username: 'roger' }
  res.send('ok')
})

app.listen(8088)