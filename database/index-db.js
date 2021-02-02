const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user     : 'root',
  password : 'hrr50-FEC',
  database : 'product_images'
})

connection.connect((err) => {
  if(err) {
    console.log('error connection mysql', err);
  } else {
    console.log('mysql connected!')
  }
})

connection.getProductInfo = (product_id, callback) => {
  let queryString = `SELECT * FROM product_images WHERE product_id = ${product_id}`;
  connection.query(queryString, (err, queryData) => {
    if(err) {
      callback(err);
    } else {
      callback(queryData);
    }
  });
};

module.exports.connection = connection;
