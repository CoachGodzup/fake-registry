const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const DEFAULT_PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

const server = app.listen(DEFAULT_PORT, () => {
  console.log(`listening on port ${server.address().port}`);
})