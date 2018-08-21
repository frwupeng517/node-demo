const fs = require('fs')

fs.readFile('aaas.txt', (err, data) => {
  if(err) {
    console.log(err)
    // { Error: ENOENT: no such file or directory, open 'D:\node-demo\aaas.txt'
    // errno: -4058,
    // code: 'ENOENT',
    // syscall: 'open',
    // path: 'D:\\node-demo\\aaas.txt' }
  } else{
    console.log(data.toString())
    // lorem njnfasdg hhghagd
  }
})