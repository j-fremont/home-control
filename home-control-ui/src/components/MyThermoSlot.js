import React from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MyThermoSlot = ({ slot, updateSlot, removeSlot }) => {

	const changeValue = (event) => {
		const regex = /^[0-9]+$/i;
		const newValue = event.target.value;
		if (regex.test(newValue) || newValue==="") {
			updateSlot({
				...slot,
				value: newValue
			});
		}
	}

	const changeMonday = () => changeDay(0);
	const changeTuesday = () => changeDay(1);
	const changeWenesday = () => changeDay(2);
	const changeThursday = () => changeDay(3);
	const changeFriday = () => changeDay(4);
	const changeSaturday = () => changeDay(5);
	const changeSunday = () => changeDay(6);

	const changeStart = (event) => {
		const newStart = event.target.value;
		updateSlot({
			...slot,
			start: newStart
		});
	}

	const changeEnd = (event) => {
		const newEnd = event.target.value;
		updateSlot({
			...slot,
			end: newEnd
		});
	}

	const changeDay = (index) => {
		const newDays = [...slot.days];
		newDays[index] = !slot.days[index];
		updateSlot({
			...slot,
			days: newDays
		});
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
				<FormControlLabel control={<Checkbox checked={slot.days[0]} onChange={changeMonday} />} label="Lundi" />
				<FormControlLabel control={<Checkbox checked={slot.days[1]} onChange={changeTuesday} />} label="Mardi" />
				<FormControlLabel control={<Checkbox checked={slot.days[2]} onChange={changeWenesday} />} label="Mercredi" />
				<FormControlLabel control={<Checkbox checked={slot.days[3]} onChange={changeThursday} />} label="Jeudi" />
				<FormControlLabel control={<Checkbox checked={slot.days[4]} onChange={changeFriday} />} label="Vendredi" />
				<FormControlLabel control={<Checkbox checked={slot.days[5]} onChange={changeSaturday} />} label="Samedi" />
				<FormControlLabel control={<Checkbox checked={slot.days[6]} onChange={changeSunday} />} label="Dimanche" />
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
