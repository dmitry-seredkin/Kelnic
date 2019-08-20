
const express = require('express');
const cors = require('cors');
const app = express();

let obj = {
  man: 1,
  woman: 0
};

app.use(cors());

app.get('/', function (req, res) {
  console.log('get');
  res.json(JSON.stringify(obj));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
