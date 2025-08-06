import React from 'react';

import Container from '@mui/material/Container';

import MyThermoSend from '../containers/MyThermoSend'

const MyContainerThermoSend = ({ container }) => {

	return (
		<Container fixed>
			<MyThermoSend />
		</Container>
	)
}

export default MyContainerThermoSend
