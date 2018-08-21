const express = require('express')
const exStatic = require('express-static')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const pathLib = require('path')


var app = express()
var upload = multer({dest: 'uploads/'})  // 告诉Multer将上传的文件保存在哪
// 1、如果省略掉options对象，这些文件将保存在内存中，永远不会写入磁盘
// 2、为了避免命名冲突，Multer会修改上传的文件名。这个重命名功能可以根据您的需要定制
/*
key                        value
dest 或 storage             在哪里存储文件
fileFilter                  文件过滤器，控制哪些文件可以被接受
limits                      限制上传的数据
preservePath                保存包含文件名的完整文件路径
*/

app.use(upload.any())  // .any() 接受一切，文件数组将保存在 req.files

app.post('/', function(req, res) {
  console.log(req.files)
  /*
    [ { 
      fieldname: 'file',
      originalname: '20170518094208_75467.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'uploads/',
      filename: '5b150ac2e6fe8e994eaa7f30987d5755',
      path: 'uploads\\5b150ac2e6fe8e994eaa7f30987d5755',
      size: 129505 
    } ]
  */
  var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext

  console.log(newName)
  // uploads\f9e72f046697ae85206ffce9776183fe.jpg

  // 1、获取源文件扩展名
  // 2、重命名临时文件
  fs.rename(req.files[0].path, newName, function(err) {
    if(err) {
      res.send('上传失败')
    } else{
      res.send('成功')
    }
  })
})

app.listen(8080)
// app.use(exStatic('/'))