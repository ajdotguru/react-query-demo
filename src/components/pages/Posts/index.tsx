import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { Spinner } from 'components/lib';
import { Posts } from 'components/sections';
import { fetchPosts } from 'api/posts';

const maxPostPages = 10;

const PostsPage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const { data, isLoading } = useQuery(
		['posts', currentPage],
		() => fetchPosts(currentPage as number),
		{
			staleTime: 100000,
		}
	);

	if (isLoading) {
		return <Spinner />;
	}

	if (!data) {
		return <Typography variant="h1">No Post!</Typography>;
	}

	return (
		<Stack>
			<Typography variant="h1">Posts</Typography>
			<Posts data={data} />
			<Box display="flex" justifyContent="space-around" alignItems="center">
				<Button
					variant="contained"
					disabled={currentPage <= 1}
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
