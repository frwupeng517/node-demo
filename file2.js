const fs = require('fs')

fs.writeFile('bbbb.txt', 'write some contents here', (err) => {
  console.log(err)
})