import React from 'react';

import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { ThermoModeEnum } from '../actions'

const MyThermoSend = ({ modes, mode, setMode }) => {

	const changeMode = (event) => {
		const newMode = event.target.value;
		setMode(newMode);
	}

	return (
		<Stack spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="mode-simple-select-label">Mode</InputLabel>
				<Select
					labelId="mode-simple-select-label"
					id="mode-simple-select"
					label="Commune"
					value={mode}
					onChange={changeMode}>
					{Object.values(ThermoModeEnum).map(m => (
						<MenuItem key={m} value={m}>{m}</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="outlined">Envoyer</Button>
		</Stack>
	)
}

export default MyThermoSend
