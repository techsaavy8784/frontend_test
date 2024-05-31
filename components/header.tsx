import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';

const Header = () => {
	return (
		<AppBar
			position='fixed'
			elevation={0}
			sx={{
				backgroundColor: 'transparent',
				px: '30px'
			}}
		>
			<Toolbar>
				<Image src='https://nodeguardians.io/assets/ng_n_g_logo.svg' alt='logo' width={77} height={27} />
				<Box sx={{ flexGrow: 1 }} />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1,
						'& .MuiBox-root': { display: 'flex', alignItems: 'center', gap: 1 },
						'& .MuiTypography-root': { fontSize: '14px', color: '#B69E72', fontFamily: 'Cinzel', fontWeight: '700' }
					}}
				>
					<Box>
						<Image src='/assets/gold.png' alt='gold' width={24} height={24} />
						<Typography>12 023</Typography>
					</Box>
					<Image src='/assets/squaredivider.png' alt='square' width={8} height={8} />
					<Box>
						<Image src='/assets/exp.png' alt='exp' width={24} height={24} />
						<Typography>132 586</Typography>
					</Box>
					<Image src='/assets/avatar.png' alt='avatar' width={48} height={48} />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
