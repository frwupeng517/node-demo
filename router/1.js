const express = require('express')

const app = express()

//目录1：/user/
var routerUser = express.Router()

routerUser.get('/1.html', function (req, res) { //http://xxx.com/user/1.html
  res.send('user1')
})

routerUser.get('/2.html', function (req, res) { //http://xxx.com/user/2.html
  res.send('user2')
})

app.use('/user', routerUser)


app.listen(8080)