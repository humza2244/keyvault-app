const { Pool } = require('pg');

const pool = new Pool({
  user: 'humzabaig',
  host: 'localhost',
  database: 'keyvault',
  password: '',
  port: 5432,
});

module.exports = pool;
