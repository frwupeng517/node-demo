const express = require('express')
const app = express()

var router = express.Router()
router.get('/', function(req, res) {
  res.send('hello world')
})

app.use('/', router)

var customerRouter = express.Router()
customerRouter.get('/new.html', function (req, res) {
  res.send('新建客户')
})
customerRouter.get('/query.html', function (req, res) {
  res.send('查询客户')
})

app.use('/customer', customerRouter)



app.listen(8080)
