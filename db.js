const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: '', // coloque seu usuário
  password: '',  // coloque sua senha
  database: 'portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
