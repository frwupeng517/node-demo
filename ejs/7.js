const ejs = require('ejs')

ejs.renderFile('./views/7.ejs', {csspath: '../style/common.css'}, function(err, data) {
  if(err) {
    console.log(err)
  } else{
    console.log(data)
  }
})