const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: '127.0.0.1',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'trybecashdb'
});

module.exports = connection;