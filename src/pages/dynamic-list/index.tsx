import {useState} from 'react';
import InputForm from './input-form';
import ItemsList from './items-list';
import DynamicListContext from './context';
import {ItemProps} from './types';

export default function DynamicList() {
	const [items, setItems] = useState<ItemProps[]>([]);

	function onSubmitItems(item: ItemProps) {
		setItems([...items, item]);
	}

	function removeItem(id: string) {
		const newItems = items.filter(item => item.id !== id);
		setItems(newItems);
	}

	return (<>
		<InputForm onSubmitItems={onSubmitItems}/>
		<DynamicListContext.Provider value={{removeItem}}>
			{items.length > 0 && <ItemsList items={items}/>}
		</DynamicListContext.Provider>
	</>);
}