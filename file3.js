const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  var file_name='./www'+req.url
  console.log(typeof file_name)
  fs.readFile(file_name, (err, data) => {
    if(err) {
      res.write('404')
    } else{
      res.write(data)
    }
    res.end()
  })
  // res.end()  write after end readFile是异步读取
})

server.listen(8081)