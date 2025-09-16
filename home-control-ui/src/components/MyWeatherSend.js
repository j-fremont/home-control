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

import { WeatherMeasEnum } from '../actions'

import { config } from '../config'

import axios from "axios";

const MyWeatherSend = ({ measurement, setWeatherMeasurement, setWeatherTemperature, setWeatherHumidity, setWeatherLuminosity, setWeatherPressure, setMessage }) => {

	const [start, setStart] = useState();
	const [end, setEnd] = useState();

	const changeMeasurement = (event) => {
		const newMeasurement = event.target.value;
		setWeatherMeasurement(newMeasurement);
	}

	const load = () => {

		if (!measurement) {

			setMessage({
				severity: 'error',
				text: 'Donnée à mesurer introuvable !'
			});

			return;
		}

		const query = "select sensor,round(m*10)/10 from (select mean(temperature) as m from weather group by time(1h), sensor)"

		axios({
			method: 'post',
			url: 'http://' + config.server.host + ':' + config.server.port + '/weather/query',
			headers: {
				'Content-type': 'application/json'
			},
			data: {
				query
			}
		})
		.then((response) => {

			if (response.data.results && response.data.results[0] && response.data.results[0].series && response.data.results[0].series[0]) {

				setWeatherTemperature(response.data.results[0].series[0].values);
				
			} else {

				setWeatherTemperature([]);
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
					{Object.values(WeatherMeasEnum).map(m => (
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

export default MyWeatherSend
