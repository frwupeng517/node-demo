const fs = require('fs')

fs.rename('aaa.txt', 'bbb.txt', function (err) {
  console.log(err)
})