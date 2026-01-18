import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { LinkyMeasEnum } from '../actions'

import { config } from '../config'

import axios from "axios";

const MyLinkySend = ({ measurement, setLinkyMeasurement, setLinkyBase, setLinkyIinst, setMessage }) => {

	const [start, setStart] = useState();
	const [end, setEnd] = useState();

	const changeMeasurement = (event) => {
		const newMeasurement = event.target.value;
		setLinkyMeasurement(newMeasurement);
	}

	const load = () => {

		if (!measurement) {

			setMessage({
				severity: 'error',
				text: 'Donnée à mesurer introuvable !'
			});

			return;
		}

		let queryTime = "";

		if (start && end) {

			const dateStart = new Date(start.$d);
			const dateEnd = new Date(end.$d);
			queryTime = " where time > '" + dateStart.toISOString().split('T')[0] + "' and time < '" + dateEnd.toISOString().split('T')[0] + "'";
		}

		let query = "";

		if (measurement===LinkyMeasEnum.BASE) {
			query = "select base from elec" + queryTime + " limit " + config.maxBars;
		} else {
			query = "select round(mean(iinst)*10)/10 from elec" + queryTime + " group by time(1h)"

		}

		axios({
			method: 'post',
			url: 'http://' + config.server.host + ':' + config.server.port + '/linky/query',
			headers: {
				'Content-type': 'application/json'
			},
			data: {
				query
			}
		})
		.then((response) => {

			if (response.data.results && response.data.results[0] && response.data.results[0].series && response.data.results[0].series[0]) {

				if (measurement===LinkyMeasEnum.BASE) {

					console.log(response.data.results[0].series[0].values)

					const values = response.data.results[0].series[0].values.map(v => ([
						v[0].split('T')[0],
						v[1]
					]));

					console.log(values)

					const valueStart = values[0];
					const valueEnd = values[values.length-1];

					console.log(valueStart)
					console.log(valueEnd)

					const daysArray = [];

					for (const d=new Date(valueStart[0]); d <= new Date(valueEnd[0]); d.setDate(d.getDate()+1)) {
						daysArray.push(new Date(d).toISOString().split('T')[0]);
					}

					console.log(daysArray)

					console.log(daysArray.map(date => {
						
						const valueWithDate = values.find(v => v[0]===date);

						return valueWithDate || [
							date,
							 0
						]

					}));

				} else {
					setLinkyIinst(response.data.results[0].series[0].values);
				}
				
			} else {

				if (measurement===LinkyMeasEnum.BASE) {
					setLinkyBase([]);
				} else {
					setLinkyIinst([]);
				}
			}

			setMessage({
				severity: 'success',
				text: 'Données chargées !'
			});
		})
		.catch(() => {

			setMessage({
				severity: 'error',
				text: 'Erreur lors du chargement des données !'
			});
		});
	}

	return (
		<Stack spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="mode-simple-select-label">Mesure</InputLabel>
				<Select
					labelId="mode-simple-select-label"
					id="mode-simple-select"
					label="Commune"
					value={measurement}
					onChange={changeMeasurement}>
					{Object.values(LinkyMeasEnum).map(m => (
						<MenuItem key={m} value={m}>{m}</MenuItem>
					))}
				</Select>
			</FormControl>
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
