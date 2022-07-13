type ILocation = {
	city: string;
	coordinates: string;
	country: string;
	postcode: number;
	state: string;
	street: string;
	timezone: string;
}

export type IPerson = {
	name: string;
	location: ILocation;
}

export type Sorting = {
	sortedField: string;
	sortOrder: number;
}
