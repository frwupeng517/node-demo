const express = require('express')
const cookieSession = require('cookie-session')

const app = express()

var arr = []

for (var i = 0; i < 100000; i++) {
  arr.push('sig_' + Math.random())
}

app.use(cookieSession({
  name: 'roger',
  keys: arr,
  maxAge: 7*34*3600*1000
}))

app.use('/', function(req, res) {
  if(req.session['count'] == null) {
    req.session['count'] = 1
  } else{
    req.session['count']++
  }
  console.log(req.session['count'])

  res.send('ok')
})

app.listen(8080)