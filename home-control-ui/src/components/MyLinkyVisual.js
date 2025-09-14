import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

import { LinkyMeasEnum } from '../actions'

const MyLinkyVisual = ({ measurement, base, iinst }) => {

	const [values, setValues] = useState([]);
	const [xAxis, setXAxis] = useState([]);
	const [series, setSeries] = useState([]);
	const [valuesIinst, setValuesIinst] = useState([]);
	const [xAxisIinst, setXAxisIinst] = useState([]);
	const [seriesIinst, setSeriesIinst] = useState([]);

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

		setValuesIinst(iinst.map(i => {

			const day = i[0].split('T')[0].split('-')[2];
			const hour = i[0].split('T')[1].split(':')[0];
			const value = i[1];

			return {
				dayHour: day + "-" + hour,
				value
			};
		}));

	}, [iinst]);

	useEffect(() => {

		setXAxis([{
			data: values.map(v => v.date)
		}]);

		setSeries([{
			data: values.map(v => v.value)
		}]);

	}, [values]);

	useEffect(() => {

		setXAxisIinst([{
			data: valuesIinst.map(v => v.dayHour),
			scaleType: 'band',
			valueFormatter: (value) => value.split('-')[1] + "h",
		}]);

		setSeriesIinst([{
			data: valuesIinst.map(v => v.value),
			showMark: false,
			color: 'red'
		}]);

	}, [valuesIinst]);

	return (
		<Stack spacing={2}>
			{measurement===LinkyMeasEnum.BASE ?
				<BarChart
					xAxis={xAxis}
					series={series}
					height={600} />
			:
				<LineChart
					xAxis={xAxisIinst}
					series={seriesIinst}
					height={600} />
			}
		</Stack>
	)
}

export default MyLinkyVisual
