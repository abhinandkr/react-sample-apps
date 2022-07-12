import {useContext} from "react";
import Context from "./context";
import {IPerson} from "./types";

export default function DataTable(props: {persons: IPerson[]}) {
	const {sort} = useContext(Context);
	return (
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
				{props.persons.map((person: IPerson, personIdx: number) => {
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
	);
}