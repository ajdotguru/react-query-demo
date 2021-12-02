import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'utils/mui';

export const App = () => (
	<ThemeProvider theme={theme}>
		<Container maxWidth="xl">
			<Typography variant="h1">App</Typography>
		</Container>
	</ThemeProvider>
);
