const faker = require('faker');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user     : 'root',
  password : '',
  database : 'product_images'
})

fakeDataMaker = () => {
  let product_id = 1;
  let productName = faker.commerce.productName();
  let description = faker.commerce.productDescription();
  let company_name = faker.company.companyName();
  let category = `Target / Pets / Cat Stuff / ${faker.commerce.department()}`;
  let image_num = 0;

  const seedingQuery = 'insert into product_images (product_id, product_name, media_type, image_desc, image_loc, company_name, category, image_num) values (?, ?, ?, ?, ?, ?, ?, ?)'

  const dbpromises = [];
  const dbQuery = (seedingQuery, mockProduct) => {
    return new Promise((resolve, reject) => {
      return db.query(seedingQuery, mockProduct, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve('saving complete for',result.insertId);
        }
      })
    })
  }

  for (let i = 1; i <= 300; i++) {
    randomSize = Math.floor(Math.random()*(900-700)+700);
    let mockProduct =
      [
        product_id,
        productName,
        'image',
        description,
        `http://placekitten.com/${randomSize}/${randomSize}`,
        company_name,
        category,
        image_num,
      ];

    //6 images per product (& 6 images share the same product name)
    if (i % 6 === 0) {
      product_id++;
      productName = faker.commerce.productName()
      description = faker.commerce.productDescription();
      company_name = faker.company.companyName();
      image_num = 0;
    };
    image_num++;
    dbpromises.push(dbQuery(seedingQuery, mockProduct));
  }

  Promise.all(dbpromises)
    .finally((result) => {
      db.end()
      console.log('seeding complete');
    })
    .catch((err) => {
      console.log(err);
    })
}


db.connect((err) => {
  if(err) {
    console.log('error connection mysql', err);
  } else {
    console.log('mysql connected!')
    fakeDataMaker();
  }
})



