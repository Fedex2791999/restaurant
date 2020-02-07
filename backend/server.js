const express = require('express');
var mysql = require('mysql');
// const Nexmo = require('nexmo');
// send Message
// const nexmo = new Nexmo({
//   apiKey: '5ad5bd85',
//   apiSecret: '7SyajsBVRHI3VfBN'
// });

// const from = 'Nexmo';
// const to = '84973405092';
// const text = 'Mã pass code của bạn là:\n17020795  \n';

// nexmo.message.sendSms(
//   from,
//   to,
//   text,
//   {
//     type: 'unicode'
//   },
//   (err, responseData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (responseData.messages[0]['status'] === '0') {
//         console.log('Message sent successfully.');
//       } else {
//         console.log(
//           `Message failed with error: ${responseData.messages[0]['error-text']}`
//         );
//       }
//     }
//   }
// );

// end send message

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
