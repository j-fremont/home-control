import React from 'react';

import Grid from '@mui/material/Grid';

import MyContainerLinkySend from './MyContainerLinkySend'
import MyContainerLinkyVisual from './MyContainerLinkyVisual'

const MyContainerLinky = () => {

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<MyContainerLinkySend />
			</Grid>
			<Grid size={10}>
				<MyContainerLinkyVisual />
			</Grid>
		</Grid>
	)
}

export default MyContainerLinky
