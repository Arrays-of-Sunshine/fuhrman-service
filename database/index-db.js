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
  connection.end();
};

module.exports.connection = connection;

// mysql 5.7
// +--------------+--------------+------+-----+---------+----------------+
// | Field        | Type         | Null | Key | Default | Extra          |
// +--------------+--------------+------+-----+---------+----------------+
// | ID           | int(11)      | NO   | PRI | NULL    | auto_increment |
// | product_id   | varchar(4)   | YES  |     | NULL    |                |
// | product_name | varchar(60)  | YES  |     | NULL    |                |
// | media_type   | varchar(10)  | YES  |     | NULL    |                |
// | image_desc   | varchar(240) | YES  |     | NULL    |                |
// | image_loc    | varchar(240) | YES  |     | NULL    |                |
// | company_name   | varchar(60)  | YES  |     | NULL    |                |
// | category     | varchar(60)  | YES  |     | NULL    |                |
// +--------------+--------------+------+-----+---------+----------------+