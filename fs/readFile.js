'use strict'

const fs = require('fs')

fs.readFile('simple.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else{
    console.log(data)
    console.log(data.length + 'bytes')
    // hello world!
    // 12bytes
  }
})