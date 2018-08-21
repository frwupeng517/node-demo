'use strict'

const fs = require('fs')

// 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息
fs.stat('output.txt', function(err, stat) {
  if (err) {
    console.log(err)
  } else {
    // 是否是文件
    console.log(`isFile: ${stat.isFile()}`)
    // 是否是目录
    console.log(`isDirectory: ${stat.isDirectory()}`)
    if(stat.isFile()) {
      // 文件大小
      console.log(`size: ${stat.size}`)
      // 创建时间，Date对象
      console.log(`birth time: ${stat.birthtime}`)
      // 修改时间，Date对象
      console.log(`modified time: ${stat.mtime}`)
    }

    /*
      isFile: true
      isDirectory: false
      size: 96
      birth time: Mon Aug 20 2018 14:46:06 GMT+0800 (中国标准时间)
      modified time: Mon Aug 20 2018 14:46:06 GMT+0800 (中国标准时间)
    */
  }
})