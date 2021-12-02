import { axios } from 'utils/axios';
import { IPost } from 'models/posts';

export const fetchPosts = async () => {
	const { data } = await axios.get<IPost[]>('posts?_limit=10&_page=0');

	return data;
};
