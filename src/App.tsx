import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'utils/mui';

export const App = () => (
	<ThemeProvider theme={theme}>
		<h1>App</h1>
	</ThemeProvider>
);
