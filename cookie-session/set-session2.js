const express = require('express')
const cookieSession = require('cookie-session')

const app = express()

app.use(cookieSession({
  name: 'roger',
  keys: ['kobe', 'james', 'paul'],
  maxAge: 7*24*3600*1000
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