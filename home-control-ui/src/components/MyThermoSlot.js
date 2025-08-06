import React from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MyThermoSlot = ({ slot, removeSlot }) => {

	const changeValue = (event) => {

	}

	const changeStart = (event) => {

	}

	const changeEnd = (event) => {

	}

	return (
		<Stack mt={2} spacing={2}>
			<TextField
				id="normal"
				value={slot.value}
				onChange={changeValue}
				label="Température de la plage"
				variant="outlined"
				InputProps={{
					endAdornment: <InputAdornment position="end">°C</InputAdornment>
				}}/>
			<FormGroup>
				<FormControlLabel control={<Checkbox checked={slot.days[0]} />} label="Lundi" />
				<FormControlLabel control={<Checkbox checked={slot.days[1]} />} label="Mardi" />
				<FormControlLabel control={<Checkbox checked={slot.days[2]} />} label="Mercredi" />
				<FormControlLabel control={<Checkbox checked={slot.days[3]} />} label="Jeudi" />
				<FormControlLabel control={<Checkbox checked={slot.days[4]} />} label="Vendredi" />
				<FormControlLabel control={<Checkbox checked={slot.days[5]} />} label="Samedi" />
				<FormControlLabel control={<Checkbox checked={slot.days[6]} />} label="Dimanche" />
			</FormGroup>
			<Grid container spacing={2}>
				<Grid size={6}>
					<TextField
						id="start"
						value={slot.start}
						onChange={changeStart}
						label="Heure de début"
						variant="outlined"
						InputProps={{
							endAdornment: <InputAdornment position="end">HH:MM</InputAdornment>
						}}/>
				</Grid>
				<Grid size={6}>
					<TextField
						id="end"
						value={slot.end}
						onChange={changeEnd}
						label="Heure de fin"
						variant="outlined"
						InputProps={{
							endAdornment: <InputAdornment position="end">HH:MM</InputAdornment>
						}}/>
				</Grid>
			</Grid>
			<Button variant="outlined" onClick={() => {
				removeSlot(slot.id)
			}}>Supprimer</Button>
		</Stack>
	)
}

export default MyThermoSlot
