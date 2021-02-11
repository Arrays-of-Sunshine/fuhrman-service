const express = require('express');
const db = require('../database/index-mongo-db.js');
require('newrelic');
require('dotenv').config();

const app = express();
const cors = require('cors');

const PORT = 8002;

app.use(cors({
  origin: 'http://localhost:8000',
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/', express.static('public'));
app.use('/bundle', express.static('public/bundle.js'));

app.get('/products/:id', (req, res) => {
  let { id } = req.params;
  id = Number(id);
  db.getProductInfo(id, (result) => {
    res.send(result[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
