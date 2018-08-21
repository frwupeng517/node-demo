const jade = require('jade')

var str = jade.renderFile('./views/21.jade', {
  a: 7,
  b: 8,
  pretty: true
})

console.log(str)