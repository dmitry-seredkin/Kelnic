const getData = require('./data').getData();

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/', function (req, res) {
  res.send('hi');
});

app.get('/more_flats', function (req, res) {
  console.log('get flats');
  res.json(getData());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
