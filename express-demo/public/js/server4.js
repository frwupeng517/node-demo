const express = require('express')
const querystring = require('querystring')
const bodyParser = require('body-parser')

const app = express()
app.listen(8080)

/*
app.use(function(req, res, next) {
  var str = ''
  req.on('data', function(data){
    str += data
  })
  req.on('end', function(){
    req.body = querystring.parse(str)
    next()
  })
})
*/

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', function(req, res) {
  console.log(req.body)
})