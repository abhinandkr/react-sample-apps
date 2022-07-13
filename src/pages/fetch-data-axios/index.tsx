import axios from 'axios';
import {useEffect, useState} from 'react';
import FetchDataContext from './context';
import {IPerson} from './types';
import DataTable from './data-table';


type SortedFieldType = {
	sortColumn: string | null,
	sortOrder: number,		// [0: unsorted, 1: ascending, 2: descending]
}

export default function FetchDataAxios() {
	const [persons, setPersons] = useState<IPerson[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	// const [originalPersons, setOriginalPersons] = useState<IPerson[]>([]);
	// const [sorting, setSorting] = useState<SortedFieldType>({
	// 	sortColumn: null,
	// 	sortOrder: 0,
	// });

	async function fetchData(pageNumber: number): Promise<IPerson[]> {
		const url = `https://randomuser.me/api/?results=10&page=${pageNumber}&seed=1`;
		const res = await axios.get(url);
		return res.data.results;
	}

	useEffect(() => {
		function extractData(apiPersons: IPerson[]) {
			const p = apiPersons.map((result: any): IPerson => {
				const {name, location} = result;
				const {title, first, last} = name;
				const {coordinates, timezone, street} = location;
				return {
					name: `${title} ${first} ${last}`,
					location: {
						...location,
						coordinates: `[${coordinates.latitude}, ${coordinates.longitude}]`,
						timezone: `${timezone.offset} ${timezone.description}`,
						street: `${street.number} ${street.name}`,
					},
				};
			});
			return p;
		}

		async function fetchMyAPI() {
			const apiPersons = await fetchData(pageNumber);
			const p = extractData(apiPersons);
			// setOriginalPersons(p);
			setPersons(p);
		}

		fetchMyAPI().then(r => {
		});
	}, [pageNumber]);


	// function setSortOrder(sortKey: string) {
	// 	const {sortColumn, sortOrder} = sorting;
	// 	if (sortColumn === sortKey) {
	// 		setSorting({...sorting, sortOrder: (sortOrder + 1) % 3});
	// 	} else {
	// 		setSorting({sortColumn: sortKey, sortOrder: 1});
	// 	}
	// }
	//
	// useEffect(() => {
	// 	const {sortColumn, sortOrder} = sorting;
	// }, [sorting]);


	/**
	 * Sort columns
	 * @param field {string} The field in the main data object to sort
	 * @param sortKey {string} The key in the field
	 */
	function sort(field: string, sortKey?: string): void {

		const p = [...persons];

		if (sortKey) {		// Used for the `location` field
			// setSortOrder(sortKey);
			p.sort((person1: any, person2: any) => {
				return person1[field][sortKey].localeCompare(person2[field][sortKey]);
			});
		} else {	// Used for the `name` field
			p.sort((person1: any, person2: any) => {
				return person1.name.localeCompare(person2.name);
			});
		}
		setPersons(p);
	}

	return (
		<FetchDataContext.Provider value={{sort}}>
			<DataTable persons={persons}/>
			<button onClick={() => setPageNumber(pageNumber => Math.abs(pageNumber - 1))}>Previous page</button>
			<button onClick={() => setPageNumber(pageNumber => Math.abs(pageNumber + 1))}>Next page</button>
		</FetchDataContext.Provider>
	);
}