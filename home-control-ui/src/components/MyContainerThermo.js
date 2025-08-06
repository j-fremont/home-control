import React from 'react';

import Grid from '@mui/material/Grid';

import MyContainerThermoSend from './MyContainerThermoSend'
import MyContainerThermoSetup from '../containers/MyContainerThermoSetup'

const MyContainerThermo = () => {

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<MyContainerThermoSend />
			</Grid>
			<Grid size={10}>
				<MyContainerThermoSetup />
			</Grid>
		</Grid>
	)
}

export default MyContainerThermo
