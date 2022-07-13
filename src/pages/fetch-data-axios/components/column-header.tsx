import '../css/column-header.css';
import {useContext} from 'react';
import FetchDataContext from '../context';

type ColumnHeaderProps = {
	placeholderText: string;
	field: string;
}

export default function ColumnHeader(props: ColumnHeaderProps) {
	const {onSearchValueChange, sort, getSorting} = useContext(FetchDataContext);
	const {placeholderText, field} = props;
	let sortString = 'SORT';
	let clickedButtonClass = 'btn-info';

	const sorting = getSorting();
	if (sorting) {
		const {sortOrder, sortedField} = sorting;
		if (field === sortedField) {
			clickedButtonClass = 'btn-success';
			switch (sortOrder) {
				case 0:
					sortString = '↕';
					break;
				case 1:
					sortString = '↑';
					break;
				case 2:
					sortString = '↓';
					break;
				default:
					break;
			}
		} else {
			sortString = '↕';
		}
	}

	return (<div className={'columnHeader'}>
		<input type={'text'} placeholder={placeholderText}
		       onChange={(e) => onSearchValueChange(field, e.target.value)}/>
		<button onClick={() => sort(field)} className={clickedButtonClass}>{sortString}</button>
	</div>);
}