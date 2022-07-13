import {ItemProps} from '../types';
import '../css/item.css';
import {useContext} from 'react';
import DynamicListContext from '../context';

export default function Item(props: ItemProps) {
	const {removeItem} = useContext(DynamicListContext);
	const {id, value} = props;

	function onItemClick() {
		removeItem && removeItem(id);
	}

	return <li onClick={onItemClick}>{value}</li>;
}