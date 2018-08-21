'use strict'

const fs = require('fs')

var data = '练得身形似鹤形，千株松下两函经；我来问道无余说，云在青天水在瓶。'

fs.writeFile('output.txt', data, function (err) {
  if (err) {
    console.log(err)
  } else{
    console.log('写入成功')
  }
})