const ejs = require('ejs')

ejs.renderFile('./views/1.ejs', {name: 'roger'}, function(err, data) {
  console.log(data)
})