const { MongoClient } = require('mongodb');

const url = 'mongodb://3.21.244.109/productImages';

const getProductInfo = (id, cb) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('connected to mongoClient');
    const dbo = db.db('productImages');
    const query = { product_id: id };
    dbo.collection('productimages').find(query).toArray((err, results) => {
      if (err) throw err;
      cb(results);
      db.close();
    });
  });
};

module.exports = {
  getProductInfo,
};

/* This code below is currently not being used, but will be kept here for learning purposes. Will be removed. */

// const mongoURI = 'mongodb://localhost/productImages';
// const collectionName = 'productimages';
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// // const ProductImages = require('./Models/productImages.js');
// // const

// module.exports = {
//   db,
//   getProductInfo: async (id, cb) => {
//     await db.collection(collectionName).find({id: id}).toArray((err, results) => {
//       if (err) {
//         throw err;
//       }
//       console.log(results);
//     });
//     // console.log(result)
//     // cb(result);
//   },
// };

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
