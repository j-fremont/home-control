import React from 'react';

import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { ThermoModeEnum } from '../actions'

import axios from "axios";

import { config } from '../config'

const MyThermoSend = ({ thermo, setMode, setMessage }) => {

	const changeMode = (event) => {
		const newMode = event.target.value;
		setMode(newMode);
	}

	const send = () => {

		if (!check()) {

			setMessage({
				severity: 'error',
				text: 'Erreur dans le format des heures.'
			});

		} else {

			axios({
				method: 'post',
				url: 'http://' + config.server.host + ':' + config.server.port + '/thermo',
				headers: {
					'Content-type': 'application/json'
				},
				data: thermo
			})
			.then((response) => {
				console.log(response.data);
				setMessage({
					severity: 'success',
					text: 'Message envoyé !'
				});
			});
		}
	}

	const check = () => {
		const regex = /^[0-9][0-9]:[0-9][0-9]$/i;
		return thermo.slots.every(s => regex.test(s.start) && regex.test(s.end));
	}

	return (
		<Stack spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="mode-simple-select-label">Mode</InputLabel>
				<Select
					labelId="mode-simple-select-label"
					id="mode-simple-select"
					label="Commune"
					value={thermo.mode}
					onChange={changeMode}>
					{Object.values(ThermoModeEnum).map(m => (
						<MenuItem key={m} value={m}>{m}</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="outlined" onClick={send}>Envoyer</Button>
		</Stack>
	)
}

export default MyThermoSend
