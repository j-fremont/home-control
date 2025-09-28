import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';

import MyAppBar from '../containers/MyAppBar'
import MyContainerMessage from './MyContainerMessage'

import { config } from '../config'

import axios from "axios";

const MyApp = ({ container, setThermo }) => {

	useEffect(() => {

		axios({
				method: 'get',
				url: 'http://' + config.server.host + ':' + config.server.port + '/thermo',
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then((response) => {

				setThermo(response.data);
			});

	}, [setThermo]);

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
