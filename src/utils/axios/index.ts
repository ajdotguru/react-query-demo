import _axios from 'axios';

export const axios = _axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 2000,
});

export const swapi = _axios.create({
	baseURL: 'https://swapi.dev/api/',
	timeout: 2000,
});
