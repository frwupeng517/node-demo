const jade = require('jade')

var str = jade.renderFile('./views/25.jade', {
  content: '<h2>hello world!</h2>',
  pretty: true
})

console.log(str)