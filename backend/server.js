const express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3307',
  database: 'sakila'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});
connection.query('SELECT * FROM `actor` WHERE actor_id = 1', function(
  error,
  results,
  fields
) {
  if (error) throw error;
  console.log(results);
});

connection.end();
const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' }
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
