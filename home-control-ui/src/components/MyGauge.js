import React from 'react';

import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const MyGauge = ({ value, title, color }) => {

    return (
		<Stack spacing={1}>
			<Gauge
                width={150}
                height={150}
                value={value}
                startAngle={0}
                endAngle={360}
                innerRadius="70%"
                outerRadius="100%"
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 25,
                        color
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: color,
                    },
                })} />
			<InputLabel id="mode-simple-select-label" style={{ textAlign: 'center' }}>{title}</InputLabel>
		</Stack>
    )
}

export default MyGauge
