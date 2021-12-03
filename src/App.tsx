import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StarwarsPage } from 'components/pages';
import { theme } from 'utils/mui';

const queryClient = new QueryClient();

export const App = () => (
	<>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Container maxWidth="xl">
					{/* <PostsPage /> */}
					<StarwarsPage />
				</Container>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ThemeProvider>
	</>
);
