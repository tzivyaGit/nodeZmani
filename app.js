var express = require('express');
var app = express();
const WebR = require('./routs')
const Port=3070;

app.listen(Port, function () {
  console.log('Example app listening on port 3000!');
});
app.use('/', WebR)

app.get('/', function (req, res) {
  res.send('Hello World!');
});