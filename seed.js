const db = require('./database/index-db.js').connection;
const faker = require('faker');

const seedingQuery = 'insert into product_images (product_id, product_name, media_type, image_desc, image_loc, brand_name, category, image_num) values (?, ?, ?, ?, ?, ?, ?, ?)'

db.query('truncate table PRODUCT_IMAGES');

fakeDatamaker = () => {
  let product_id = 1;
  let productName = faker.commerce.productName();
  let description = faker.commerce.productDescription();
  let brand_name = faker.company.companyName();
  let category = `Target/Pets/Cat Stuff/${faker.commerce.department()}`;
  let image_num = 0;

  for (let i = 1; i <= 300; i++) {
    randomSize = Math.floor(Math.random()*(600-400)+400);
    let output =
      [
        product_id,
        productName,
        'image',
        description,
        `http://placekitten.com/${randomSize}/${randomSize}`,
        brand_name,
        category,
        image_num,
      ];

    //5 images per product (& 5 images share the same product name)
    if (i % 6 === 0) {
      product_id++;
      productName = faker.commerce.productName()
      description = faker.commerce.productDescription();
      brand_name = faker.company.companyName();
      image_num = 0;
    };

    db.query(seedingQuery, output, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.insertId);
      }
    })
    image_num++;
  }
}

fakeDatamaker();


