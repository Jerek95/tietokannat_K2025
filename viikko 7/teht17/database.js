const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user1',
  password: 'test_user1',
  database: 'teht17'
});
module.exports = connection;