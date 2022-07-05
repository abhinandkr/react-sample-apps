import {ItemProps} from "./types";
import "./item.css";
import {useContext} from "react";
import DynamicListContext from "./context";

export default function Item(props: ItemProps) {
	const {removeItem} = useContext(DynamicListContext);
	const {id, value} = props;

	function onItemClick() {
		removeItem && removeItem(id);
	}

	return <li id={id} onClick={onItemClick}>{value}</li>;
}