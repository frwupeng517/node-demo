/*
  安装 npm install jade
*/

const jade = require('jade')

/*
  jade.render(source, options)
  - source: String
  - options: 所有API中的options都一样
    self 使用 self 命名空间来持有本地变量. (默认为 false)
    locals 本地变量对象
    filename 异常发生时使用，includes 时必需
    debug 输出 token 和翻译后的函数体
    compiler 替换掉 jade 默认的编译器
    compileDebug false的时候调试的结构不会被输出
    pretty 为输出加上了漂亮的空格缩进 (默认为 false)
*/

var html = jade.render('html')

var str = jade.render('hello world')

console.log(html)   // <html></html>
console.log(str)    // <hello>world</hello>