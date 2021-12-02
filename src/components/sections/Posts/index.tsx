import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { IPost } from 'models/posts';

export const Posts: React.FC<{ data: IPost[] }> = ({ data }) => {
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
