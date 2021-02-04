const seed = require('./seed.js');
let path = './generatedData.txt';
const faker = require('faker');
const csv = require('fast-csv');
const csvStream  = csv.format({ headers: true });
const { writeToPath } = require('@fast-csv/format');

const { productNames, randomWordList, companyName, category } = require('./seed.js');

// const result = [];
// for (let i = 0; i < 5; i++) {
//   const something = [productNames[i], randomWordList(), companyName[i], category[i], imageUrl];
//   result.push(something)
// }
// console.log(result)
// csvStream.pipe(csvStream.createWriteStream('data.csv')).on('end', () => process.exit());

(async() => {
  console.time('writingToPathTimer')
  let rows = [];
  rows.push(['productName', 'productDescriptionWords', 'companyName', 'category', 'imageUrl']);
  for (let i = 0; i < 10; i++) {
    try {
      rows.push([
        faker.random.arrayElement(productNames),
        randomWordList(),
        faker.random.arrayElement(companyName),
        faker.random.arrayElement(category),
        `https://placekitten.com/${faker.random.number({min: 200, max: 299})}/${faker.random.number({min: 300, max: 399})}`,
      ]);
    } catch(e) {
      console.error('error in csv writing: ', e.message);
    }
  }
  await writeToPath(path, rows)
  .on('error', err => console.error(err))
  .on('finish', () => console.log('Done writing.'));
  csvStream.end();
  console.timeEnd('writingToPathTimer')
})();

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