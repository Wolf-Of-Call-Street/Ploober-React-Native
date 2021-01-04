const express = require('express');
const mongoose = require('mongoose');
require('./schema.js');
const app = express();
const PORT = 3000;
const bodyparser = require('body-parser');
const morgan = require('morgan');
const config = require('./config.json');
const router = require('./Router.js');
const mongoUri = `mongodb+srv://Jimmy:${config.password}@users.x162c.mongodb.net/${config.dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri)
  .then(() => {
    console.log(`Connected to mongo ${config.dbname}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyparser.json());

app.use(morgan('dev'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});