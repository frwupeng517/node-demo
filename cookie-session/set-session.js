const express = require('express')
const cookieSession = require('cookie-session')

const app = express()

app.use(cookieSession({
  keys: ['kobe', 'james', 'paul']
}))

app.use('/', function(req, res){
  console.log(req.session) // Session {}

  res.send('session')
})

app.listen(8080)