'use strict'

const fs = require('fs')

var res = fs.createReadStream('simple.txt', 'utf-8')

res.on('data', function (chunk) {
  console.log('data')
  console.log(chunk)

  /*
    data
    练得身形似鹤形，
    千株松下两函经；
    我来问道无余说，
    水在青天云在瓶。
  */
})

res.on('end', function () {
  console.log('end')
})

res.on('error', function (err) {
  console.log('ERROR: ' + err)
})