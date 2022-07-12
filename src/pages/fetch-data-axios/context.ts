import {createContext} from "react";

type FetchDataContextType = {
	sort: (field: string, sortKey?: string) => void;
}

const fetchDataContextData: FetchDataContextType = {
	sort: (field: string, sortKey?: string) => {},
};

const FetchDataContext = createContext(fetchDataContextData);
export default FetchDataContext;
