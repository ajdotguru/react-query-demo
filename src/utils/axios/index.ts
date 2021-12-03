import _axios from 'axios';

export const axios = _axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 2000,
});
