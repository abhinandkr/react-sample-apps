import axios from 'axios';
import React, {useEffect, useState} from 'react';
import FetchDataContext from '../context';
import {IPerson, Sorting} from '../types';
import DataTable from './data-table';
import '../css/app.css';

export default function App() {
	const [persons, setPersons] = useState<IPerson[]>([]);
	const [originalPersons, setOriginalPersons] = useState<IPerson[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchSeed] = useState(Math.floor(100 * Math.random()));
	const [sorting, setSorting] = useState<Sorting>({sortedField: '', sortOrder: 0});
	const [resultsPerPage, setResultsPerPage] = useState(20);

	async function fetchData(pageNumber: number): Promise<IPerson[]> {
		const url = `https://randomuser.me/api/?results=${resultsPerPage}&page=${pageNumber}&seed=${fetchSeed}`;
		const res = await axios.get(url);
		return res.data.results;
	}

	useEffect(() => {
		function extractData(apiPersons: IPerson[]) {
			return apiPersons.map((result: any): IPerson => {
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
		}

		async function fetchMyAPI() {
			const apiPersons = await fetchData(pageNumber);
			const p = extractData(apiPersons);
			setPersons(p);
			setOriginalPersons(p);
		}

		fetchMyAPI().then();
	}, [pageNumber, resultsPerPage]);

	/**
	 * Sort columns
	 * @param field {string} The field in the main data object to sort
	 */
	function sort(field: string): void {
		let {sortedField, sortOrder} = sorting;
		if (field === sortedField) {
			sortOrder = (sortOrder + 1) % 3;
		} else {
			sortOrder = 1;
		}

		function comparator(a: string, b: string) {
			switch (sortOrder) {
				case 1:
					return a.localeCompare(b);
				case 2:
					return b.localeCompare(a);
				default:
					return 0;
			}
		}

		if (sortOrder === 0) {
			setPersons(originalPersons);
		} else {
			const p = [...persons];

			const f = field.split('.');
			if (f.length === 1) {		// Used for the `location` field
				p.sort((person1: any, person2: any) => {
					return comparator(person1[f[0]], person2[f[0]]);
				});
			} else {	// Used for the `name` field
				p.sort((person1: any, person2: any) => {
					return comparator(person1[f[0]][f[1]], person2[f[0]][f[1]]);
				});
			}
			setPersons(p);
		}
		setSorting({sortOrder, sortedField: field});
	}

	function onSearchValueChange(field: string, searchValue: string) {
		setSorting({sortedField: '', sortOrder: 0});
		if (!searchValue || searchValue.length === 0) {
			setPersons(originalPersons);
			return;
		}
		const p = [...originalPersons];

		const f = field.split('.');
		if (f.length === 1) {
			setPersons(p.filter((person: any) => {
				return person[f[0]].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
			}));
		} else if (f.length === 2) {
			setPersons(p.filter((person: any) => {
				return person[f[0]][f[1]].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
			}));
		}
	}

	function onResultsPerPageChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setResultsPerPage(parseInt(e.target.value));
		setSorting({sortedField: '', sortOrder: 0});
	}

	function previousPage() {
		setPageNumber(pageNumber => Math.abs(pageNumber - 1));
	}

	function nextPage() {
		setPageNumber(pageNumber => Math.abs(pageNumber + 1));
	}

	return (
		<FetchDataContext.Provider value={{sort, onSearchValueChange, getSorting: () => sorting}}>
			<DataTable persons={persons}/>
			<div className="resultsPerPageContainer">
				<label>Results per page: </label>
				<select name="resultsPerPage" value={resultsPerPage} onChange={onResultsPerPageChange}
				        className="custom-select resultsPerPageSelect">
					<option value={5}>5</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
				</select>
			</div>
			<br/>
			<div className="navigationButtonContainer">
				<button onClick={previousPage} className={'btn-primary btn-sm'}>{'< Previous page'}</button>
				<button onClick={nextPage} className={'btn-primary btn-sm'}>{'Next page >'}</button>
			</div>
		</FetchDataContext.Provider>
	);
}