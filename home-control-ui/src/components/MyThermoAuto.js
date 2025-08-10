import React from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { v4 as uuidv4 } from 'uuid';

const MyThermoAuto = ({ normal, setNormal, addSlot }) => {

	const changeNormal = (event) => {
		const regex = /^[0-9]+$/i;
		const newNormal = event.target.value;
		if (regex.test(newNormal) || newNormal==="") {
			setNormal(newNormal);
		}
	}

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<Stack mt={2} spacing={2}>
					<TextField
						id="normal"
						value={normal}
						onChange={changeNormal}
						label="Température hors plage"
						variant="outlined"
						InputProps={{
							endAdornment: <InputAdornment position="end">°C</InputAdornment>
						}}/>
					<Button variant="outlined" onClick={() => {
						addSlot({
							id: uuidv4(),
							value: "20",
							start: "06:00",
							end: "08:00",
							days: [true,true,true,true,true,true,true]
						})
					}}>Ajouter une plage</Button>
				</Stack>
			</Grid>
			<Grid size={10} />
		</Grid>
	)
}

export default MyThermoAuto
