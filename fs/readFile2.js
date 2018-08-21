const fs = require('fs')

fs.readFile('simple.txt', function(err, data) {
  if(err) {
    console.log(err)
  } else{
    // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
    console.log(data)                      // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
    // Buffer --> String
    var text = data.toString('utf-8')
    console.log(text)                      // hello world!

    // String --> Buffer
    var buf = Buffer.from(text, 'utf-8')
    console.log(buf)                        // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
  }
})