const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

let localhost = '';
if (process.env.ENV === 'Test') {
  localhost = 'mongodb://localhost/bookAPI_Test';
} else {
  localhost = 'mongodb://localhost/bookAPI-prod';
}
const db = mongoose.connect(localhost, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
});

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {

});

module.exports = app;
