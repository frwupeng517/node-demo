const express = require('express')
const serve = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const consolidate = require('consolidate')
const mysql = require('mysql')

// 连接池
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: '123456'
})

const app = express()
app.listen(8080)

// 解析 cookie
app.use(cookieParser('justremembertolearnyourskillswell'))

// 使用session
var arr = []
for (var i = 0; i < 100000; i++) {
  arr.push('keys_' + Math.random())
}

app.use(cookieSession({
  name: 'roger',
  keys: arr,
  maxAge: 7 *24 * 3600 * 1000
}))

// post 数据
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(multer({
  dest: './www/upload'
}).any())

// 配置模板引擎
// 输出什么东西
app.set('view engine', 'html')
// 模板文件放在哪儿
app.set('views', './template')
// 那种模板引擎
app.engine('html', consolidate.ejs)

// 接收用户请求
app.get('/', (req, res) => {
  // 查询 banner
  connection.query("SELECT * FROM `t_banner`", (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send('database error').end()
    }
    console.log(data)
    res.render('index.ejs', {banners: data})
  })
})

// static 数据
app.use(serve('./www'))