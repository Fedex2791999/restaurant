const express = require('express');
var mysql = require('mysql');
const app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3307',
  database: 'sakila'
});

app.get('/test', (req, res) => {
  connection.query(
    'SELECT * FROM `actor` WHERE actor_id = 1',
    (error, results, fields) => {
      if (error) throw error;
      // res.json(results);
      res.end(JSON.stringify(results));
    }
  );
  // connection.end();
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
