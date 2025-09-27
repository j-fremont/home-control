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
import { getSensor } from '../helper';

import axios from "axios";

const MyWeatherSend = ({ measurement, current, setWeatherMeasurement, setWeatherTemperature, setWeatherHumidity, setWeatherLuminosity, setWeatherPressure, setWeatherCurrent, setMessage }) => {

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

		const sensor = getSensor(measurement);

		const query = "select last(" + sensor + ") from weather group by sensor";

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

			const checkAvailableData = new Promise((resolve, reject) => {

				if (response.data.results[0].series) {

					resolve(response.data.results[0].series);

				} else {
					
					reject();
				}

			});
			
			checkAvailableData.then((series) => {

				const newLast = series.reduce((acc, val) => {

					acc = {
						...acc,
						[val.tags.sensor]: val.values[0][1]
					}

					return acc;

				}, {});

				setWeatherCurrent({
					...current,
					[sensor]: newLast
				})

				let queryTime = "";

				if (start && end) {

					const dateStart = new Date(start.$d);
					const dateEnd = new Date(end.$d);
					queryTime = " where time > '" + dateStart.toISOString().split('T')[0] + "' and time < '" + dateEnd.toISOString().split('T')[0] + "'";
				}

				const query = "select sensor,round(m*10)/10 from (select mean(" + sensor + ") as m from weather" + queryTime + " group by time(1h), sensor)";

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

						switch(measurement) {
							case WeatherMeasEnum.TEMPERATURE:
								setWeatherTemperature(response.data.results[0].series[0].values);
								break;
							case WeatherMeasEnum.HUMIDITY:
								setWeatherHumidity(response.data.results[0].series[0].values);
								break;
							case WeatherMeasEnum.LUMINOSITY:
								setWeatherLuminosity(response.data.results[0].series[0].values);
								break;
							case WeatherMeasEnum.PRESSURE:
								setWeatherPressure(response.data.results[0].series[0].values);
								break;
							default:
						}
						
					} else {

						setWeatherTemperature([]);
						setWeatherHumidity([]);
						setWeatherLuminosity([]);
						setWeatherPressure([]);
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

			})
			.catch(() => {

				setMessage({
					severity: 'warning',
					text: 'Pas de données disponibles !'
				});
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
