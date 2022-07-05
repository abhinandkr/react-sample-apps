export interface ItemProps {
	value: string;
	id: string;
}

export interface IRemoveItem {
	removeItem?: (id: string) => void;
}
