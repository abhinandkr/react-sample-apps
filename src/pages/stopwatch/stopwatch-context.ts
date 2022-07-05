import {createContext} from "react";
interface IContext {
	onClick: () => void;
}
const contextDefaultValue: IContext = {onClick: () => {}};
const StopwatchContext = createContext(contextDefaultValue);
export default StopwatchContext;
