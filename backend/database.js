/*const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'CONNECT-E-DB',
    password: 'Sarasvin23',
    port: 5432,
})
 */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CONNECT-E-DB',
  password: 'Sarasvin23',
  port: 5432,
})
 

    module.exports = pool;