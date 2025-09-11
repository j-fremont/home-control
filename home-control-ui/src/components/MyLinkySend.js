import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import axios from "axios";

const config = require('../config');

const MyLinkySend = ({ setLinkyBase, setMessage }) => {

	const [start, setStart] = useState();
	const [end, setEnd] = useState();

	const load = () => {

		let query;

		if (start && end) {

			const dateStart = new Date(start.$d);
			const dateEnd = new Date(end.$d);
			query = "select base from elec where time > '" + dateStart.toISOString().split('T')[0] + "' and time < '" + dateEnd.toISOString().split('T')[0] + "'";

		} else {

			query = "select base from elec";
		}

		axios({
			method: 'post',
			url: 'http://' + config.server.host + ':' + config.server.port + '/linky/base',
			headers: {
				'Content-type': 'application/json'
			},
			data: {
				query
			}
		})
		.then((response) => {

			if (response.data.results && response.data.results[0] && response.data.results[0].series && response.data.results[0].series[0]) {
				
				setLinkyBase(response.data.results[0].series[0].values);

			} else {

				setLinkyBase([]);
			}

			setMessage({
				severity: 'success',
				text: 'Message envoyé !'
			});
		});
	}

	return (
		<Stack spacing={2}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label="Début"
					value={start}
					onChange={newStart => setStart(newStart)} />
			</LocalizationProvider>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label="Fin"
					value={end}
					onChange={newEnd => setEnd(newEnd)} />
			</LocalizationProvider>
			<Button variant="outlined" onClick={load}>Charger</Button>
		</Stack>
	)
}

export default MyLinkySend
