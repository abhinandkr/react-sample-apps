import Item from './item';
import {ItemProps} from './types';

interface ItemsListProps {
	items: ItemProps[];
}

export default function ItemsList(props: ItemsListProps) {
	return (<>
		<ol>
			{props.items.map((item: ItemProps) => {
				return <Item id={item.id} value={item.value}/>;
			})}
		</ol>
	</>);
}
