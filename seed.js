const db = require('./database/index-db.js').connection;
const faker = require('faker');

const seedingQuery = 'insert into product_images (product_id, product_name, media_type, image_desc, image_loc) values (?, ?, ?, ?, ?)'

db.query('truncate table PRODUCT_IMAGES');

fakeDatamaker = () => {
  let product_id = 1;
  let productName = faker.commerce.productName();

  for (let i = 1; i <= 100; i++) {
    randomSize = Math.floor(Math.random()*(600-400)+400);
    let output =
      [
        product_id,
        productName,
        'image',
        'description',
        `http://placekitten.com/${randomSize}/${randomSize}`
      ];

    //5 images per product (& 5 images share the same product name)
    if (i % 5 === 0) {
      product_id++;
      productName = faker.commerce.productName()
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


