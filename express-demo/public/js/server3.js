const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log('彩虹')
  next()
})

app.use('/', function(req, res, next){
  console.log('第三级')
})

app.use('/', function(req, res, next){
  console.log('故事')
})

app.listen(8080)