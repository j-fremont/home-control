import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import CssBaseline from '@mui/material/CssBaseline';
import MyApp from './containers/MyApp'

import './App.css';

const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MyApp />
		</ThemeProvider>
	);
}

export default App;
