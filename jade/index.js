const jade = require('jade')
const fs = require('fs')

var str = jade.renderFile('./views/index.jade', {pretty: true})

fs.writeFile('index.html', str, function(err){
  if(err){
    console.log('写入失败')
  } else{
    console.log('写入成功')
  }
})