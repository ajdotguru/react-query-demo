import { swapi } from 'utils/axios';
import { IPeopleResponse } from 'models/starwars';

export const fetchPeople = async (url: string) => {
	const { data } = await swapi.get<IPeopleResponse>(url);

	return data;
};
