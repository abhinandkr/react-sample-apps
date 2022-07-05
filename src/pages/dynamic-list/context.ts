import {createContext} from "react";
import {IRemoveItem} from "./types";

const context: IRemoveItem = {removeItem: () => {}};
const DynamicListContext = createContext(context);
export default DynamicListContext;
