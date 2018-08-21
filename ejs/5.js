const ejs = require('ejs')

ejs.renderFile('./views/5.ejs', function(err, data) {
  if(err) {
    console.log(err)
  } else{
    console.log(data)
  }
})