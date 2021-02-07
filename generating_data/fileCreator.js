const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const {
  product_name, image_desc, company_name, category, image_loc,
} = require('./seed.js');

(() => {
  console.time('writingToPathTimer');
  writer.pipe(fs.createWriteStream('./generating_data/generatedData.csv'));
  try {
    for (let i = 1; i <= 10000000; i += 1) {
      writer.write({
        product_id: i,
        product_name: faker.random.arrayElement(product_name),
        image_desc: image_desc,
        company_name: faker.random.arrayElement(company_name),
        category: faker.random.arrayElement(category),
        image_loc,
      });
    }
  } catch (e) {
    console.error('error in writing to file: ', e.message);
  }
  writer.end(() => {
    console.log('done');
    console.timeEnd('writingToPathTimer');
  });
})();

/* Code not currently being used, kept for educational purposes, will utilize/delete as time permits. */

// const csv = require('fast-csv');
// const csvStream  = csv.format({ headers: true });
// const { writeToPath } = require('@fast-csv/format');

// const seed = require('./seed.js');

// const path = './generatedData.csv';
// const result = [];
// for (let i = 0; i < 5; i++) {
//   const something = [product_name[i], randomWordList(), company_name[i], category[i], imageUrl];
//   result.push(something)
// }
// console.log(result)
// csvStream.pipe(csvStream.createWriteStream('data.csv')).on('end', () => process.exit());
/*
(async() => {
  console.time('writingToPathTimer')
  // let rows = [];
  // rows.push(['productName', 'productDescriptionWords', 'company_name', 'category', 'imageUrl']);
  await writeToPath(path, ['productName', 'productDescriptionWords', 'company_name', 'category', 'imageUrl']);
  for (let i = 0; i < 10; i++) {
    try {
      await writeToPath(path, [
        [faker.random.arrayElement(product_name),
        randomWordList(),
        faker.random.arrayElement(company_name),
        faker.random.arrayElement(category),
        imageUrlFunc(),
      ])
      .on('error', err => console.error(err))
      .on('finish', () => console.log('Done writing.'));

     } catch(e) {
      console.error('error in csv writing: ', e.message);
    }
  }
  csvStream.end();
  console.timeEnd('writingToPathTimer')
})();
*/
/*
(async() => {
  for (let i = 0; i < 10; i++) {
    try {
      await fs.writeFile(path, {
        productName: faker.random.arrayElement(product_name),
        productDescriptionWords: randomWordList(),
        company_name: faker.random.arrayElement(company_name),
        category: faker.random.arrayElement(category),
        imageUrl: imageUrl,
      });
    } catch(e) {
      console.error('error in write file: ', e.message);
    }
  }
})();
*/

// async function(path) {
//   try {
//     await fs.appendFile(path);
//     console.log(`successfully added data to ${path}`);
//   } catch (e) {
//     console.error('there was an error: ', e.message)
//   }
// }
