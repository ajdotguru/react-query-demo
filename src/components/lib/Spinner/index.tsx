import { Box, CircularProgress } from '@mui/material';

export const Spinner = ({ minHeight = '100vh' }) => (
	<Box display="flex" justifyContent="center" alignItems="center" minHeight={minHeight}>
		<CircularProgress size={100} thickness={7} disableShrink />
	</Box>
);
