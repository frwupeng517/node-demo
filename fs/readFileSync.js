'use strict'

const fs = require('fs')

// 同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。

try {
  var data = fs.readFileSync('simple.txt', 'utf-8')
  console.log(data)    // hello world!
} catch (err) {
  console.log(err)
}