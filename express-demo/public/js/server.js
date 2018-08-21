const express = require('express')
const exStatic = require('express-static')
const app = express()
app.listen(8080)


var users = {
  'aaa': '123456',
  'bbb': '654321'
}

app.get('/login', function(req, res){
  // console.log(req)  query: { username: 'kobe', password: '666666' }
  var username = req.query.username
  var password = req.query.password

  if(users[username]) {
    if(users[username] !== password) {
      res.send({ok: false, msg: '密码错误'})
    } else{
      res.send({ok: true, msg: '成功'})
    }
  } else{
    res.send({ok: false, msg: '此用户不存在！'})
  }
})

app.use(exStatic('../../public'))
