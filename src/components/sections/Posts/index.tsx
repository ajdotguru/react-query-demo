import { useMutation } from 'react-query';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { deletePost } from 'api/posts';
import { IPost } from 'models/posts';

const SecondaryAction: React.FC<{ postId: number }> = ({ postId }) => {
	const { mutate, isLoading, isSuccess } = useMutation(() => deletePost(postId));

	return (
		<Button
			size="small"
			variant="contained"
			onClick={() => mutate()}
			disabled={isLoading}
			color={isSuccess ? 'success' : 'primary'}
		>
			Delete
		</Button>
	);
};

export const Posts: React.FC<{ data: IPost[] }> = ({ data }) => {
	return (
		<List>
			{data.map(({ id, title }) => (
				<ListItem key={id} divider disableGutters secondaryAction={<SecondaryAction postId={id} />}>
					<ListItemButton disableGutters disableRipple>
						<ListItemText primary={title} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};
