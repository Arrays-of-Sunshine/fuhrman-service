const express = require('express');
// const promise = require('bluebird');
const db = require('../database/index-db.js').connection;
const app = express();

const PORT = 1234;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

app.get('/:id', (req, res) => {
  console.log(req);
  let id = req.params.id;
  db.getImages(id, (result) => {
    console.log(result);
    res.send(result);
  })
})

app.listen(PORT);

// '/products/:id/product_images'