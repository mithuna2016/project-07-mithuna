const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'CONNECT-E-DB',
    password: 'Sarasvin23',
    port: 5432,
})
 /*client.connect()
 const query = `
 SELECT * FROM public."userDB"
`;
 client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row,'sussusful');
    }
    client.end();
});


/*const { Pool } = require('pg');
//const Cursor = require('pg-cursor');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CONNECT-E-DB',
    password: 'Sarasvin23',
    port: 5432,
});
*/
 

    module.exports=client;