import React from 'react';

import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const MyMessage = ({ message, setMessage }) => {

	const closeMessage = () => {
		setMessage(undefined);
	}

	return (
		<Stack spacing={2}>
			{message &&
				<Alert severity={message.severity} onClose={closeMessage}>{message.text}</Alert>
			}
		</Stack>
	)
}

export default MyMessage
