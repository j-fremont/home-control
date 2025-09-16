import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { LineChart } from '@mui/x-charts/LineChart';

const MyWeatherVisual = ({ measurement, temperature, humidity, luminosity, pressure }) => {

	const [values, setValues] = useState([]);
	const [xAxis, setXAxis] = useState([]);
	const [series, setSeries] = useState([]);

	useEffect(() => {

		setValues(temperature.reduce((acc, val) => {

			const day = val[0].split('T')[0].split('-')[2];
			const hour = val[0].split('T')[1].split(':')[0];
			const dayHour = day + "-" + hour;
			const sensor = val[1];
			const value = val[2];

			const existingDayHour = acc.find(a => a.dayHour===dayHour);

			if (existingDayHour) {

				existingDayHour[sensor] = value;

			} else {

				acc = [...acc, {
					dayHour,
					[sensor]: value

				}];
			}

			return acc;

		}, []));

	}, [temperature]);

	useEffect(() => {

		setXAxis([{
			data: values.map(v => v.dayHour),
			scaleType: 'band',
			valueFormatter: (value) => value.split('-')[1] + "h",
		}]);

		setSeries([{
			data: values.map(v => v.bathroom),
			showMark: false,
			color: 'blue'
		},{
			data: values.map(v => v.inside),
			showMark: false,
			color: 'red'
		}]);

	}, [values]);

	return (
		<Stack spacing={2}>
			<LineChart
				xAxis={xAxis}
				series={series}
				height={600} />
		</Stack>
	)
}

export default MyWeatherVisual
