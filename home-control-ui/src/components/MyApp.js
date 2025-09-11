import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';

import MyAppBar from '../containers/MyAppBar'
import MyContainerMessage from './MyContainerMessage'

const MyApp = ({ container }) => {

	const initialize = () => {

	}

	useEffect(() => {
		initialize();
	}, []);

	return (
		<Grid container spacing={4}>
			<Grid size={12}>
				<MyAppBar />
			</Grid>
			<Grid size={12}>
				<MyContainerMessage />
			</Grid>
			<Grid size={12}>
				{container}
			</Grid>
		</Grid>
	)
}

export default MyApp
