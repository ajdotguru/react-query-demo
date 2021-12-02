import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Posts } from 'components/sections';
import { theme } from 'utils/mui';

const queryClient = new QueryClient();

export const App = () => (
	<ThemeProvider theme={theme}>
		<QueryClientProvider client={queryClient}>
			<Container maxWidth="xl">
				<Posts />
			</Container>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</ThemeProvider>
);
