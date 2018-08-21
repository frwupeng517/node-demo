const http = require('http')
const urlLib = require('url')

var server = http.createServer((req, res) => {
  var obj = urlLib.parse(req.url)
  /*
  console.log(obj)
  Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?username=longchunmei&password=123456',
    query: 'username=longchunmei&password=123456',
    pathname: '/form',
    path: '/form?username=longchunmei&password=123456',
    href: '/form?username=longchunmei&password=123456' }
  Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: null,
    query: null,
    pathname: '/favicon.ico',
    path: '/favicon.ico',
    href: '/favicon.ico' }
  */
  var url = obj.pathname
  var GET = obj.query
  console.log(url, GET)
  res.end()
})

server.listen(8081)