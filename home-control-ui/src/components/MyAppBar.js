import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { PageEnum } from '../actions'

const MyAppBar = ({ page, setPage }) => {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{Object.values(PageEnum).map(p => (
							<Button
								key={p}
								onClick={() => setPage(p)}
								sx={{ my: 2, color: p===page ? 'black' : 'white', display: 'block' }}>
								{p}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default MyAppBar
