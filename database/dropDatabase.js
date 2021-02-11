const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DB_MONGOURI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
})
  .then((data) => {
    console.log('connected to database!!!!');
  })
  .catch((e) => {
    console.error('error in database connection: ', e);
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
