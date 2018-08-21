const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url) 
  // /
  // /favicon.ico
  switch(req.url) {
    case '/1.html':
      res.write('Hello world!')
      break
    case '/2.html':
      res.write('你好，世界！')
      break
    default:
      res.write('404')
      break
  }
  res.end()
})

server.listen(8081)