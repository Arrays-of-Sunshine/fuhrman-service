const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productImages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.dropCollection('productimages')
  .catch((e) => {
    if (e.message === 'ns not found') {
      console.error('Collection doesn\'t exist! Database is ready to be seeded.');
    } else {
      console.error('error in dropping collections:', e.message);
    }
  })
  .finally(() => {
    mongoose.connection.close();
  });

/* This code below is currently not being used, but will be kept here for learning purposes. */

// const fs = require('fs');
// const csv = require('csv-parser');
// const ProductImages = require('./Models/productImages.js');

// let readStream = fs.createReadStream('./generating_data/generatedData.csv')
// readStream
//   .on('open', () => {
//     console.time('addingToDatabase')
//   })
//   .pipe(csv())
//   .on('data', (data) => {
//     new ProductImages({
//       _id: data['id'],
//       product_name: data['productName'],
//       product_description: data['randomDescription'],
//       company_name: data['companyName'],
//       category: data['category'],
//       images: data['imageUrlList'],
//     }).save((e) => {
//       if (e) {
//         return console.error('error in saving to db: ', e);
//       }
//       console.log('doc inserted successfully');
//     })
//     })
//     .on('end', () => {
//       readStream.close();
//       console.timeEnd('addingToDatabase');
//     })

// what is createReadStream and createWriteStream??

// do i even need this stuff???
// .then(() => {
//   console.log('mongo is ready to use with productImages')
// })
// .catch((e) => {
//   console.error('error in connection: ', e.message);
// });

// when is this stuff needed??

// db.then(db => console.log('connected to mongo'))
// .catch((e) => {
//   console.error('error')
// })
