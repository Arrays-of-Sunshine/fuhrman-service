const seed = require('./seed.js');
const fs = require('fs');
let path = './generatedData.txt';
const faker = require('faker');

const {productNames, randomWordList, companyName, category, imageUrl} = require('./seed.js');
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

// async function(path) {
//   try {
//     await fs.appendFile(path);
//     console.log(`successfully added data to ${path}`);
//   } catch (e) {
//     console.error('there was an error: ', e.message)
//   }
// }