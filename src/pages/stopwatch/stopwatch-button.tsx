import React, {ReactNode, useContext} from "react";
import StopwatchContext from "./stopwatch-context";

export function StopwatchButton(props: {children: ReactNode}) {
	const {onClick} = useContext(StopwatchContext);
	return <button onClick={onClick}>{props.children}</button>;
}