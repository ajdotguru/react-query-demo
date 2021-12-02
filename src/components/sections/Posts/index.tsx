import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { Spinner } from 'components/lib';
import { fetchPosts } from 'api/posts';

export const Posts = () => {
	const { data, isLoading } = useQuery('posts', fetchPosts);

	if (isLoading) {
		return <Spinner />;
	}

	if (!data) {
		return <Typography variant="h1">No Post!</Typography>;
	}

	return (
		<List>
			{data.map(({ id, title }) => (
				<ListItem
					key={id}
					divider
					disableGutters
					/* secondaryAction={<Button variant="contained">View</Button>} */
				>
					<ListItemButton disableGutters disableRipple>
						<ListItemText primary={title} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};
