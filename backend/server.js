const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const accountSid = 'ACd00286cd0a5b2ea7224b9fc9c06a9040';
const authToken = '2e3e0faebbbde9ee77ba605d07d8be43';
const client = require('twilio')(accountSid, authToken);

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

app.post('/booking', (req, res) => {
  console.log(req.body);
  // const sms = 'Tên tôi là: ' + req.body.name + '\nSố điện thoại là: ' + req.body.phoneNumber;
  // console.log(sms);
  // client.messages
  //   .create({
  //     body: sms,
  //     from: '+12028049954',
  //     to: '+84973405092'
  //   })
  //   .then(message => console.log(message.sid));
  res.end('Đã gửi tin nhắn');
});
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
