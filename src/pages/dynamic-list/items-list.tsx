import Item from "./item";
import {IRemoveItem, ItemEntry} from "./types";

interface ItemsListProps extends IRemoveItem {
	items: ItemEntry[];
}

export default function ItemsList(props: ItemsListProps) {
	const {items, removeItem} = props;
	return (<>
		<ol>
			{items.map((item: ItemEntry) => {
				return <Item item={item} removeItem={removeItem}/>;
			})}
		</ol>
	</>);
}
