const jade = require('jade')

var str = jade.renderFile('./views/23.jade', {
  a: 8,
  pretty: true
})

console.log(str)