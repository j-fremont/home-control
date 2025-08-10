import React from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const MyThermoForced = ({ forced, setForced }) => {

	const changeForced = (event) => {
		const regex = /^[0-9]+$/i;
		const newForced = event.target.value;

		console.log(newForced)
		console.log(regex.test(newForced))
		console.log(newForced==="")

		if (regex.test(newForced) || newForced==="") {
			setForced(newForced);
		}
	}

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<Stack mt={2} spacing={2}>
					<TextField
						id="forced"
						value={forced}
						onChange={changeForced}
						label="Température en mode forcé"
						variant="outlined"
						InputProps={{
							endAdornment: <InputAdornment position="end">°C</InputAdornment>
						}}/>
				</Stack>
			</Grid>
			<Grid size={10} />
		</Grid>
	)
}

export default MyThermoForced
