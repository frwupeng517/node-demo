const ejs = require('ejs')

ejs.renderFile('./views/2-2.ejs', {json: {
  arr: [
    {user: 'roger', gender: 'male'},
    {user: 'sara', gender: 'female'}
  ]
}}, function(err, data) {
  if(err) {
    console.log(err)
  } else{
    console.log(data)
  }
})