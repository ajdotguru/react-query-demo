import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const _theme = createTheme({
	palette: {
		primary: {
			main: grey[800],
		},
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(','),
	},
});

export const theme = responsiveFontSizes(_theme);
