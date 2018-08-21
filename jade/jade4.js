const jade = require('jade')

var str = jade.renderFile('./views/16.jade', {pretty: true, name: 'roger'})

console.log(str)