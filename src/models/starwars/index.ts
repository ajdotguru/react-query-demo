export interface IPeople {
	name: string;
	url: string;
	birth_year: string;
}

export interface IPeopleResponse {
	count: number;
	next: string;
	previous: string;
	results: IPeople[];
}
