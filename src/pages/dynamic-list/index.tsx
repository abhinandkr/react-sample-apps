import {useState} from "react";
import InputForm from "./input-form";
import ItemsList from "./items-list";
import {ItemEntry} from "./types";

export default function DynamicList() {
	const [items, setItems] = useState<ItemEntry[]>([]);

	function onSubmitItems(value: ItemEntry) {
		setItems([...items, value]);
	}

	function removeItem(id: string) {
		const newItems = items.filter(item => item.id !== id);
		setItems(newItems);
	}

	return (<>
		<InputForm onSubmitItems={onSubmitItems}/>
		{items.length > 0 && <ItemsList items={items} removeItem={removeItem}/>}
	</>);
}