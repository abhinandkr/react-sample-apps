import {IRemoveItem, ItemEntry} from "./types";
import "./item.css";

interface ItemProps extends IRemoveItem {
	item: ItemEntry;
}

export default function Item(props: ItemProps) {
	const {item, removeItem} = props;
	const {id, value} = item;

	function onItemClick() {
		removeItem(id);
	}

	return <li id={id} onClick={onItemClick}>{value}</li>;
}