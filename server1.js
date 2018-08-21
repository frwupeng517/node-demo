// /form?username=sansa&password=123456
// /favicon.ico

const http = require('http')

const server = http.createServer((req, res) => {
  let GET = {}
  let arr1 = req.url.split('?')
  let url = arr1[0]
  if(arr1[1]) {
    let arr2 = arr1[1].split('&')
    arr2.forEach((item, index) => {
      let str = item.split('=')
      GET[str[0]] = str[1]
    })
  } 
  console.log(url, GET)
  // /form { username: 'sansa', password: '123456' }
  // /favicon.ico {}
  res.end()
})

server.listen(8081)