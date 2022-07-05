export interface ItemEntry {
	id: string;
	value: string;
}

export interface IRemoveItem {
	removeItem: (id: string) => void;
}