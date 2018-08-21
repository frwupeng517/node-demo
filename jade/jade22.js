const jade = require('jade')

var str = jade.renderFile('./views/22.jade', {
  json: {width: '200px', height: '200px', background: 'red'},
  arr: ['form-group', 'clearfix'],
  pretty: true
})

console.log(str)