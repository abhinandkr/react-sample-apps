import {IPerson} from '../types';
import ColumnHeader from './column-header';

type DataTableProps = {
	persons: IPerson[];
}

export default function DataTable(props: DataTableProps) {
	return (
		<div>
			<table className={'table table-striped table-hover table-sm table-bordered table-dark'}>
				<thead>
				<tr>
					<th scope={'col'}>#</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Name'} field={'name'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Street'} field={'location.street'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'City'} field={'location.city'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'State'} field={'location.state'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Country'} field={'location.country'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Postcode'} field={'location.postcode'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Coordinates'} field={'location.coordinates'}/>
					</th>
					<th scope={'col'}>
						<ColumnHeader placeholderText={'Timezone'} field={'location.timezone'}/>
					</th>
				</tr>
				</thead>
				<tbody>
				{props.persons.map((person: IPerson, personIdx: number) => {
						const {name, location} = person;
						return (
							<tr key={personIdx + 1}>
								<th scope={'row'}>{personIdx + 1}</th>
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
					},
				)}
				</tbody>
			</table>
		</div>
	);
}