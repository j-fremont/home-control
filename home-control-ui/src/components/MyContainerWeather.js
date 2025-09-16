import React from 'react';

import Grid from '@mui/material/Grid';

import MyContainerWeatherSend from './MyContainerWeatherSend'
import MyContainerWeatherVisual from './MyContainerWeatherVisual'

const MyContainerWeather = () => {

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<MyContainerWeatherSend />
			</Grid>
			<Grid size={10}>
				<MyContainerWeatherVisual />
			</Grid>
		</Grid>
	)
}

export default MyContainerWeather
