import { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useQuery, useQueryClient } from 'react-query';
import { Spinner } from 'components/lib';
import { Posts } from 'components/sections';
import { fetchPosts } from 'api/posts';

const maxPostPages = 10;

// isLoading is a subset of isFetching.
// isFetching - the async query function hasn't yet resolved
// isLoading - no cached data , plus isFetching

// Optimistic updates (assuming change will happen)
// Update React Query Cache with data returned from the server
// Trigger re-fetch of relevant data (invalidation)

// useQuery uses retries 3 times by default

const PostsPage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const queryClient = useQueryClient();

	useEffect(() => {
		if (currentPage < maxPostPages) {
			const nextPage = currentPage + 1;

			queryClient.prefetchQuery(['posts', nextPage], () => fetchPosts(nextPage as number));
		}
	}, [currentPage, queryClient]);

	const { data, isLoading } = useQuery(
		['posts', currentPage],
		() => fetchPosts(currentPage as number),
		{
			staleTime: 1000 * 60,
			keepPreviousData: true,
		}
	);

	if (isLoading) {
		return <Spinner />;
	}

	if (!data) {
		return <Typography variant="h1">No Post!</Typography>;
	}

	return (
		<Stack spacing={5}>
			<Box>
				<Typography variant="h1">Posts</Typography>
				<Posts data={data} />
			</Box>
			<Box display="flex" justifyContent="space-around" alignItems="center">
				<Button
					variant="contained"
					disabled={currentPage <= 0}
					onClick={() => setCurrentPage(prevPage => prevPage - 1)}
				>
					Previous Page
				</Button>
				<Typography variant="body1">Page {currentPage}</Typography>
				<Button
					variant="contained"
					disabled={currentPage >= maxPostPages}
					onClick={() => setCurrentPage(prevPage => prevPage + 1)}
				>
					Next Page
				</Button>
			</Box>
		</Stack>
	);
};

export default PostsPage;
