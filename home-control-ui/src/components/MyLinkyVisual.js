import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { BarChart } from '@mui/x-charts/BarChart';

const MyLinkyVisual = ({ base }) => {

	const [values, setValues] = useState([]);
	const [xAxis, setXAxis] = useState([]);
	const [series, setSeries] = useState([]);

	useEffect(() => {

		setValues(base.reduce((acc, val, idx) => {

			if (idx) {

				const date = base[idx-1][0].split('T')[0];
				const value = val[1] - base[idx-1][1];

				acc = [...acc, {
					date,
					value
				}];
			}

			return acc;

		}, []));

	}, [base]);

	useEffect(() => {

		setXAxis([{
			data: values.map(v => v.date)
		}]);

		setSeries([{
			data: values.map(v => v.value)
		}]);

	}, [values]);

	return (
		<Stack spacing={2}>
			<BarChart
				xAxis={xAxis}
				series={series}
				height={600} />
		</Stack>
	)
}

export default MyLinkyVisual
