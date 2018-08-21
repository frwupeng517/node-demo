const ejs = require('ejs')

ejs.renderFile('./views/6.ejs', {flag: 'common'}, function(err, data) {
  if(err) {
    console.log(err)
  } else{
    console.log(data)
  }
})