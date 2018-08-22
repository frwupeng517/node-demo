const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'root',
  password: '123456'
})

connection.query("INSERT INTO `t_user` VALUES (31, 'antony', '070305'), (32, 'jim', '548794'), (33, 'henry', '546546')", function (err, data) {
  if (err) {
    throw err
  }
})

connection.query("SELECT * FROM  `t_user`", (err, data) => {
  if (err) {
    throw err
  }
  console.log(JSON.stringify(data))

  /*
    [
      {"id":1,"username":"roger","password":"123456"},
      {"id":2,"username":"sara","password":"654987"},
      {"id":3,"username":"kobe","password":"240840"},
      {"id":6,"username":"curry","password":"789541"},
      {"id":11,"username":"antony","password":"070305"},
      {"id":12,"username":"jim","password":"548794"},
      {"id":13,"username":"henry","password":"546546"},
      {"id":21,"username":"antony","password":"070305"},
      {"id":22,"username":"jim","password":"548794"},
      {"id":23,"username":"henry","password":"546546"},
      {"id":31,"username":"antony","password":"070305"},
      {"id":32,"username":"jim","password":"548794"},
      {"id":33,"username":"henry","password":"546546"}
    ]
  */
})