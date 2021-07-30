const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.use('view engine', ejs);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, function () {
  console.log('Sever started on port 3000');
});
