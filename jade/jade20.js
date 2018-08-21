const jade = require('jade')

var str = jade.renderFile('./views/20.jade', {
  name: 'roger',
  pretty: true
})

console.log(str)