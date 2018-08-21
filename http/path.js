const path = require('path')

var workDir = path.resolve('.')

var filePath = path.join(workDir, 'pub', 'index.html')

console.log('workDir')
console.log(workDir)           // D:\node-demo\http

console.log('filePath')
console.log(filePath)          // D:\node-demo\http\pub\index.html