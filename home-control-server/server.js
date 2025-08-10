'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);

const config = require('./config');

var thermoRouter = require('./routes/thermo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/thermo', thermoRouter);

http.listen(config.server.port, () => {
  console.log('listening on *:' + config.server.port);
});
