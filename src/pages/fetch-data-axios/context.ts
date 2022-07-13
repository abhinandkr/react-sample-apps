import {createContext} from 'react';
import {Sorting} from './types';

type FetchDataContextType = {
	sort: (field: string) => void;
	onSearchValueChange: (field: string, searchValue: string) => void;
	getSorting: () => Sorting | null;
}

const fetchDataContextData: FetchDataContextType = {
	sort: () => {},
	onSearchValueChange: () => {},
	getSorting: () => null,
};

const FetchDataContext = createContext(fetchDataContextData);
export default FetchDataContext;
