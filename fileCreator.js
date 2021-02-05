const seed = require('./seed.js');
let path = './generatedData.csv';
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
// const csv = require('fast-csv');
// const csvStream  = csv.format({ headers: true });
// const { writeToPath } = require('@fast-csv/format');

const { productNames, randomDescription, companyName, category, imageUrlList } = require('./seed.js');

(() => {
  console.time('writingToPathTimer');
  writer.pipe(fs.createWriteStream('./generatedData.csv'));
  try {
    for (let i = 0; i < 10000000; i++) {
      writer.write({
        productName: faker.random.arrayElement(productNames),
        randomDescription: randomDescription,
        companyName: faker.random.arrayElement(companyName),
        category: faker.random.arrayElement(category),
        imageUrlList: imageUrlList,
      })
    }
  } catch(e) {
    console.error('error in writing to file: ', e.message);
  }
  writer.end();
  console.log('done');
  console.timeEnd('writingToPathTimer');
})();


// const result = [];
// for (let i = 0; i < 5; i++) {
//   const something = [productNames[i], randomWordList(), companyName[i], category[i], imageUrl];
//   result.push(something)
// }
// console.log(result)
// csvStream.pipe(csvStream.createWriteStream('data.csv')).on('end', () => process.exit());
/*
(async() => {
  console.time('writingToPathTimer')
  // let rows = [];
  // rows.push(['productName', 'productDescriptionWords', 'companyName', 'category', 'imageUrl']);
  await writeToPath(path, ['productName', 'productDescriptionWords', 'companyName', 'category', 'imageUrl']);
  for (let i = 0; i < 10; i++) {
    try {
      await writeToPath(path, [
        [faker.random.arrayElement(productNames),
        randomWordList(),
        faker.random.arrayElement(companyName),
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
        productName: faker.random.arrayElement(productNames),
        productDescriptionWords: randomWordList(),
        companyName: faker.random.arrayElement(companyName),
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