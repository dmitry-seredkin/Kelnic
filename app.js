const getData = require('./data')();

const express = require('express');
const cors = require('cors');
const app = express();


const corsOptions = {
  'credentials': true,
  'origin': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'allowedHeaders': 'Authorization,X-Requested-With,X-HTTP-Method-Override,Content-Type,Cache-Control,Accept',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('hi');
});

app.post('/', function (req, res) {
  const { type, sortDir } = req.body;
  res.json(getData(type, sortDir));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
