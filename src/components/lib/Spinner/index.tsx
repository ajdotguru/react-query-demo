import { Box, CircularProgress } from '@mui/material';

export const Spinner = () => (
	<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
		<CircularProgress size={100} thickness={7} disableShrink />
	</Box>
);
