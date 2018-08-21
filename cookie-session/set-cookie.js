const express = require('express')
const app = express()
/*
app.use('/aaa/a.html', function(req, res) {
  // res.cookie('user', 'roger')
  res.cookie('password', '888888', {path: '/aaa', maxAge: 24*3600*1000})  // 向上获取cookie
  res.send('ok')
})
*/

app.use('/', function(req, res){
  res.cookie('username', 'roger', {path: '/', maxAge: 24*3600*1000})
  res.send('ok')
})

app.listen(8088)