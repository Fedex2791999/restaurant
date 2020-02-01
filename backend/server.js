const express = require('express');
var mysql = require('mysql');
const app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3307',
  database: 'restaurant'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});
app.get('/hotpot', (req, res) => {
  connection.query('SELECT * FROM `menu_hotpot` ', (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
  // connection.end();
});
app.get('/grill', (req, res) => {
  connection.query('SELECT * FROM `menu_grill` ', (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
  // connection.end();
});
app.get('/dessert', (req, res) => {
  connection.query(
    'SELECT * FROM `menu_dessert` ',
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
  // connection.end();
});
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
