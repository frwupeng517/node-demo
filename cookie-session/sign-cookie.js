const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

let secret = 'helloworld'

app.use(cookieParser(secret))

app.use('/', function(req, res){
  req.secret = secret
  res.cookie('password', '888888', {signed: true})

  // console.log(req.cookies)  // { username: 'roger' }

  console.log('未签名cookie: ', req.cookies)        // 未签名cookie:  { username: 'roger' }
  console.log('签名cookie: ', req.signedCookies)    // 签名cookie:  { password: '888888' }
  
  res.send('signed cookie')
})

app.listen(8088)