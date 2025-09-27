'use strict';

const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');

router.post('/query', (req, res) => {
	
	axios({
		method: 'post',
		url: 'http://' + config.influxdb.host + ':' + config.influxdb.port + '/query?db=homedb&precision=m',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: {
			q: req.body.query
		}

	}).then((response) => {
		
		res.send(response.data);
	});
});

router.post('/last', (req, res) => {
	
	axios({
		method: 'post',
		url: 'http://' + config.influxdb.host + ':' + config.influxdb.port + '/query?db=homedb&precision=m',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: {
			q: req.body.query
		}

	}).then((response) => {
		
		res.send(response.data);
	});
});

module.exports = router;
