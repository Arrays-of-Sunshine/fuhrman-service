const mongoose = require('mongoose');

const mongoURI = 'mongodb://3.21.244.109:27017';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "admin",
  pass: "password",
})
  .then((data) => {
    console.log('connected to database!!!!')
  })
  .catch((e) => {
    console.error('error in database connection: ', e);
  })

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
