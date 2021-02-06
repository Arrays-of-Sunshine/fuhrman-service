const mongoose = require('mongoose');

const { db } = require('./index-mongo-db.js');

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
