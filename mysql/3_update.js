const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'root',
  password: '123456'
})

connection.query("UPDATE `t_user` SET username = 'roger wu' WHERE id = '1'", (err, data) => {
  if (err) {
    throw err
  }
})

connection.query("SELECT * FROM `t_user` WHERE id = '1'", (err, data) => {
  if (err) {
    throw err
  }
  console.log(JSON.stringify(data))

  /*
    [{"id":1,"username":"roger wu","password":"123456"}]
  */
})