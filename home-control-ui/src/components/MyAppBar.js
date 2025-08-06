import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { PageEnum } from '../actions'

const MyAppBar = ({ page, setPage }) => {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{Object.values(PageEnum).map((page) => (
							<Button
								key={page}
								onClick={() => setPage(page)}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default MyAppBar
