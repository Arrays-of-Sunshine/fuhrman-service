const db = require('./database/index-db.js').connection;
const faker = require('faker');

const seedingQuery = 'insert into product_images (product_id, product_name, media_type, image_desc, image_loc) values (?, ?, ?, ?, ?)'

db.query('truncate table PRODUCT_IMAGES');

fakeDatamaker = () => {
  let product_id = 1
  for (let i = 1; i <= 100; i++) {
    let output =
      [
        product_id,
        faker.commerce.productName(),
        'image',
        'description',
        faker.image.animals(90, 90)
      ];

    //allocating the same product id per product.
    if (i % 5 === 0) {
      product_id++;
    };

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


