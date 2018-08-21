const express = require('express')
const exStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const jade = require('jade')
const ejs = require('ejs')
const consolidate = require('consolidate')

const app = express()
app.listen(8080)

// 1、解析cookie
app.use(cookieParser('secret'))

// 2、使用session
var arr = []
for(var i = 0; i < 100000; i++) {
  arr.push('keys_' + Math.random())
}

app.use(cookieSession({
  name: 'roger',
  keys: arr,
  maxAge: 7*24*3600*1000
}))

// 3、post数据
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(multer({
  dest: './uploads'
}).any())

app.set('view engine', 'html')
app.set('views', './views')
app.engine('html', consolidate.ejs)

app.get('/index', function(req, res) {
  res.render('1.ejs', {name: 'roger'})
})

// 用户请求
app.use('/', function(req, res, next) {
  console.log(req.query, req.body, req.files, req.cookies, req.session)

  /*
    {} 
    {} 
    [ { 
      fieldname: 'file',
      originalname: 'TIM图片20180820141948.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: './uploads',
      filename: '6a20eca24779cb0da3800d494042409f',
      path: 'uploads\\6a20eca24779cb0da3800d494042409f',
      size: 362373 
    } ]
    { roger: 'eyJjb3VudCI6MTg1fQ==','roger.sig': 'F-SsILcEtDry_VzDOWI3GhCfZjQ' } 
    Session {}
  */
})

// 4、static数据
app.use(exStatic('./www'))