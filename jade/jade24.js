const jade = require('jade')

var str = jade.renderFile('./views/24.jade', {
  arr: ['a', 'b', 'c', 'd'],
  pretty: true
})

console.log(str)