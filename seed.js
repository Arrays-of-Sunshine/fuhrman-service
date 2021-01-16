const db = require('./database/index-db.js').connection;
const faker = require('faker');

const seedingQuery = 'insert into product_images (product_id, product_name, media_type, image_desc, image_loc) values (?, ?, ?, ?, ?)'

db.query('truncate table PRODUCT_IMAGES');

fakeDatamaker = () => {
  for (let i = 0; i < 100; i++) {
    let output =
      [
        i,
        faker.commerce.productName(),
        'image',
        'description',
        faker.image.animals()
      ];
    db.query(seedingQuery, output, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.insertId);
      }
    })
  }
}

fakeDatamaker();


