import axios from 'axios';
import {useEffect, useState} from "react";

type ILocation = {
	city: string;
	coordinates: string;
	country: string;
	postcode: number;
	state: string;
	street: string;
	timezone: string;
}

type IPerson = {
	name: string;
	location: ILocation;
}

export default function FetchDataAxios() {
	let [persons, setPersons] = useState<IPerson[]>([]);

	async function fetchData() {
		const url = 'https://randomuser.me/api/?results=20';
		const res = await axios.get(url);
		return res.data.results;
	}

	useEffect(() => {
		async function fetchMyAPI() {
			const apiPersons = await fetchData();
			const p = apiPersons.map((result: any): IPerson => {
				const {name, location} = result;
				const {title, first, last} = name;
				const {coordinates, timezone, street} = location;
				return {
					name: `${title} ${first} ${last}`,
					location: {
						...location,
						coordinates: `[${coordinates.latitude}, ${coordinates.longitude}`,
						timezone: `${timezone.offset} ${timezone.description}`,
						street: `${street.number} ${street.name}`,
					}
				}
			});
			setPersons(p);
		}

		fetchMyAPI();
		// 	fetchData()
		// 		.then(
		// 			(apiPersons) => {
		// 				const p = apiPersons.map((result: any): IPerson => {
		// 					const {name, location} = result;
		// 					return {
		// 						name,
		// 						location,
		// 					}
		// 				});
		// 				setPersons(p);
		// 			},
		// 			(reason: any) => console.error(reason))
		// 		.catch((e) => console.error(e));
	}, []);

	/**
	 * Sort columns
	 * @param field {string} The field in the main data object to sort
	 * @param sortKey {string} The key in the field
	 */
	function sort(field: string, sortKey?: string) {
		const p = [...persons];
		if (sortKey) {		// Used for the `location` field
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

	// function sortByLocation(sortKey: string) {
	// 	const p = [...persons];
	// 	p.sort((person1: any, person2: any) => {
	// 		return person1.location[sortKey].localeCompare(person2.location[sortKey]);
	// 	});
	// 	setPersons(p);
	// }
	//
	// function sortByName() {
	// 	const p = [...persons];
	// 	p.sort((person1: any, person2: any) => {
	// 		return person1.name.localeCompare(person2.name);
	// 	});
	// 	setPersons(p);
	// }

	return (
		<>
			<div>
				<table className={'table table-striped table-hover table-sm'}>
					<thead>
					<tr>
						<th scope={'col'}>#</th>
						<th scope={'col'} onClick={() => sort('name')}>Name</th>
						<th scope={'col'} onClick={() => sort('location', 'street')}>Street</th>
						<th scope={'col'} onClick={() => sort('location', 'city')}>City</th>
						<th scope={'col'} onClick={() => sort('location', 'state')}>State</th>
						<th scope={'col'} onClick={() => sort('location', 'country')}>Country</th>
						<th scope={'col'} onClick={() => sort('location', 'postcode')}>Postcode</th>
						<th scope={'col'} onClick={() => sort('location', 'coordinates')}>Coordinates</th>
						<th scope={'col'} onClick={() => sort('location', 'timezone')}>Timezone</th>
					</tr>
					</thead>
					<tbody>
					{persons.map((person: IPerson, personIdx: number) => {
							const {name, location} = person;
							return (
								<tr key={personIdx}>
									<th scope={'row'}>{personIdx}</th>
									<td>{name}</td>
									<td>{location?.street}</td>
									<td>{location?.city}</td>
									<td>{location?.state}</td>
									<td>{location?.country}</td>
									<td>{location?.postcode}</td>
									<td>{location?.coordinates}</td>
									<td>{location?.timezone}</td>
								</tr>
							);
						}
					)}
					</tbody>
				</table>

			</div>
		</>
	);
}