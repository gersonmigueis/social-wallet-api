// eslint-disable-next-line import/newline-after-import
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use('/static', express.static('src/puclic'));

routes(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
