const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  var str = ''

  var i = 0;

  req.on('data', data => {
    console.log(`第${++i}次接收数据`)
    str += data
  })

  req.on('end', () => {
    var POST = querystring.parse(str)
    console.log(POST)
  })
  
  res.end()
}).listen(8081)