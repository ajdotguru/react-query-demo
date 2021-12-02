import { axios } from 'utils/axios';
import { IPost } from 'models/posts';

export const fetchPosts = async (pageNum: number) => {
	const { data } = await axios.get<IPost[]>(`posts?_limit=10&_page=${pageNum}`);

	return data;
};
