import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PostsPage } from 'components/pages';
import { theme } from 'utils/mui';

const queryClient = new QueryClient();

export const App = () => (
	<ThemeProvider theme={theme}>
		<QueryClientProvider client={queryClient}>
			<Container maxWidth="xl">
				<PostsPage />
			</Container>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</ThemeProvider>
);
