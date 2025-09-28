import React from 'react';

import Grid from '@mui/material/Grid';

import MyThermoSlot from '../containers/MyThermoSlot'

const MyThermoSlots = ({ slots }) => {

	return (
		<Grid container spacing={2}>
			{slots.map((s, i) => (
				<Grid key={i} size={2}>
					<MyThermoSlot slot={s} />
				</Grid>
			))}
		</Grid>
	)
}

export default MyThermoSlots
