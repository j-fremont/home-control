import React from 'react';

import Container from '@mui/material/Container';

import MyWeatherVisual from '../containers/MyWeatherVisual'

const MyContainerWeatherVisual = () => {

	return (
		<Container maxWidth={false}>
			<MyWeatherVisual />
		</Container>
	)
}

export default MyContainerWeatherVisual
