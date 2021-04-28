// eslint-disable-next-line import/newline-after-import
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

routes(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
