const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user     : 'root',
  password : '',
  database : 'PRODUCT_IMAGES'
})

connection.connect((err) => {
  if(err) {
    console.log('error connection mysql', err);
  } else {
    console.log('mysql connected!')
  }
})

connection.getProductInfo = (product_id, callback) => {
  let queryString = `SELECT * FROM PRODUCT_IMAGES WHERE PRODUCT_ID = ${product_id}`;
  connection.query(queryString, (err, queryData) => {
    if(err) {
      callback(err);
    } else {
      callback(queryData);
    }
  });
};

module.exports.connection = connection;
