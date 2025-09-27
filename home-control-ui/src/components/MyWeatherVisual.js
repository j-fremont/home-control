import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { LineChart } from '@mui/x-charts/LineChart';

import MyGauge from './MyGauge';

import { WeatherMeasEnum } from '../actions'

import { config } from '../config'
import { getSensor } from '../helper'

const MyWeatherVisual = ({ measurement, temperature, humidity, luminosity, pressure, current }) => {

	const [values, setValues] = useState([]);
	const [xAxis, setXAxis] = useState([]);
	const [series, setSeries] = useState([]);
	const [sensor, setSensor] = useState({});

	useEffect(() => {

		setSensor(getSensor(measurement));
		
		switch(measurement) {
			case WeatherMeasEnum.TEMPERATURE:
				setValues(reduceWeather(temperature));
				break;
			case WeatherMeasEnum.HUMIDITY:
				setValues(reduceWeather(humidity));
				break;
			case WeatherMeasEnum.LUMINOSITY:
				setValues(reduceWeather(luminosity));
				break;
			case WeatherMeasEnum.PRESSURE:
				setValues(reduceWeather(pressure));
				break;
			default:
		}

	}, [measurement, temperature, humidity, luminosity, pressure]);

	useEffect(() => {

		setXAxis([{
			data: values.map(v => v.dayHour),
			scaleType: 'band',
			valueFormatter: (value) => value.split('-')[1] + "h",
		}]);

		setSeries([{
			data: values.map(v => v.bathroom),
			showMark: false,
			color: config.colors.bathroom
		},{
			data: values.map(v => v.inside),
			showMark: false,
			color: config.colors.inside
		},{
			data: values.map(v => v.outside),
			showMark: false,
			color: config.colors.outside
		}]);

	}, [values]);

	const reduceWeather = (weather) => {

		return weather.reduce((acc, val) => {

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

		}, []);

	}

	return (
		<Stack spacing={5}>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
				{current[sensor] && current[sensor].bathroom!==undefined &&
					<MyGauge value={current[sensor].bathroom} title={"Salle de bains"} color={config.colors.bathroom} />
				}
				{current[sensor] && current[sensor].inside!==undefined &&
					<MyGauge value={current[sensor].inside} title={"Interieur"} color={config.colors.inside} />
				}
				{current[sensor] && current[sensor].outside!==undefined &&
					<MyGauge value={current[sensor].outside} title={"Exterieur"} color={config.colors.outside} />
				}
			</Stack>
			<LineChart
				xAxis={xAxis}
				series={series}
				height={600} />
		</Stack>
	)
}

export default MyWeatherVisual
