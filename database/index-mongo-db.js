const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productImages', { useNewUrlParser: true })
.then(() => {
  console.log('mongo is ready to use with productImages')
})
.catch((e) => {
  console.error('error in connection: ', e.message);
});

const db = mongoose.connection;

db.then(db => console.log('connected to mongo'))
.catch((e) => {
  console.error('error')
})