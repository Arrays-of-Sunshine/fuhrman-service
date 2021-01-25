const express = require('express');
const db = require('../database/index-db.js').connection;
const app = express();

const PORT = 1234;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

app.get('/:id', (req, res) => {
  let id = req.params.id;
  db.getProductInfo(id, (result) => {
    res.send(result);
  }, () => {
    db.end();
  })
})

app.listen(PORT);

