const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '123456'
})

connection.query("SELECT * FROM `t_user`;", function (err, data) {
  if (err) {
    throw err
  }
  console.log(JSON.stringify(data))

  /*
    [
      {"id":1,"username":"roger","password":"123456"},
      {"id":2,"username":"sara","password":"654987"},
      {"id":3,"username":"kobe","password":"240840"}
    ]
  */
})
