const express = require('express');
const db = require('../database/index-db.js').connection;
const app = express();
const cors = require('cors');

const PORT = 8002;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))
app.use('/bundle', express.static('public/bundle.js'));

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  db.getProductInfo(id, (result) => {
    res.send(result);
  }, () => {
    db.end();
  })
})

app.listen(PORT, () => {
  console.log('CORS server is listening on port 8002');
});

