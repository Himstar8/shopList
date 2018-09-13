const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./config/keys').mongodbURI;
const Users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(console.log('Mongodb successful connected'))
  .catch(err => {
    console.log('Mongodb error', err);
  });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/users', Users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
