// @ts-nocheck
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Spinner } from 'components/lib';
import { fetchPeople } from 'api/starwars';

export const StarWars = () => {
	const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
		'starwars-people',
		({ pageParam = 'people' }) => fetchPeople(pageParam),
		{
			getNextPageParam: lastPage => lastPage.next || undefined,
		}
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<InfiniteScroll
			loadMore={fetchNextPage}
			hasMore={hasNextPage}
			loader={<Spinner minHeight="20vh" key="loader" />}
		>
			<List>
				{data?.pages.map(pageData => {
					return pageData.results.map(person => (
						<ListItem key={person.name} divider disableGutters>
							<ListItemButton disableGutters disableRipple>
								<ListItemText primary={person.name} secondary={person.birth_year} />
							</ListItemButton>
						</ListItem>
					));
				})}
			</List>
		</InfiniteScroll>
	);
};
