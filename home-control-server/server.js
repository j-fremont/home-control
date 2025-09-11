'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);

const config = require('./config');

var thermoRouter = require('./routes/thermo');
var linkyRouter = require('./routes/linky');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/thermo', thermoRouter);
app.use('/linky', linkyRouter);

http.listen(config.server.port, () => {
  console.log('listening on *:' + config.server.port);
});
