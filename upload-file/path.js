const path = require('path')

var str = 'c"\\wamp\\www\\a.html'

var obj = path.parse(str)

console.log(obj)

/*
{ 
  root: '',
  dir: 'c"\\wamp\\www',   -----> 路径
  base: 'a.html',         -----> 文件名部分
  ext: '.html',           -----> 扩展名
  name: 'a'               -----> 文件名部分
}
*/