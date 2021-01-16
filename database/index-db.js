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

connection.getImages = (product_id, callback) => {
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


// TABLE NAME = PRODUCT_IMAGES
// +------------+------------+----+---+-------+--------------+
// |Field       |Type        |Null|Key|Default|Extra         |
// +------------+------------+----+---+-------+--------------+
// |ID          |int(11)     |NO  |PRI|NULL   |auto_increment|
// |PRODUCT_ID  |varchar(4)  |YES |   |NULL   |              |
// |PRODUCT_NAME|varchar(10) |YES |   |NULL   |              |
// |MEDIA_TYPE  |varchar(10) |YES |   |NULL   |              |
// |IMAGE_DESC  |varchar(240)|YES |   |NULL   |              |
// |IMAGE_LOC   |varchar(240)|YES |   |NULL   |              |
// +------------+------------+----+---+-------+--------------+