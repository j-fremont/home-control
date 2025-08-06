import React from 'react';

import Stack from '@mui/material/Stack';

import MyThermoAuto from '../containers/MyThermoAuto'
import MyThermoSlots from '../containers/MyThermoSlots'

const MyContainerThermoAuto = () => {

	return (
		<Stack mt={2} spacing={2}>
			<MyThermoAuto />
			<MyThermoSlots />
		</Stack>
	)
}

export default MyContainerThermoAuto
