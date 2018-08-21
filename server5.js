const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

http.createServer((req, res) => {
  var obj = urlLib.parse(req.url, true)
  var url = obj.pathname
  var GET = obj.query

  var str = ''
  req.on('data', (data) => {
    str += data
  })
  req.on('end', () => {
    var POST = querystring.parse(str)

    var file_name = `./www${url}`
    fs.readFile(file_name, (err, data) => {
      if(err) {
        res.write('404')
      } else{
        res.write(data)
      }
      res.end()
    })
  })
}).listen(8081)