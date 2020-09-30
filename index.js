const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

console.log(process.env.DATABASE_URL)

client.query('SELECT * FROM planet', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
