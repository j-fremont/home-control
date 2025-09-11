import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MyMessage from '../containers/MyMessage'

const MyContainerMessage = () => {

	return (
		<Grid container spacing={2}>
			<Grid size={2}>
				<Container fixed>
					<MyMessage />
				</Container>
			</Grid>
			<Grid size={10} />
		</Grid>
	)
}

export default MyContainerMessage
