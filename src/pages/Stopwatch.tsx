import React, {useState} from "react";

export default function Stopwatch() {
	let [timer, setTimer] = useState(0);
	let [intervalTag, setIntervalTag] = useState(0);

	function onStartClick() {
		const intervalTag = window.setInterval(() => {
			setTimer(timer => timer + 1);
		}, 1000);
		setIntervalTag(intervalTag);
	}

	function onStopClick() {
		window.clearInterval(intervalTag);
	}

	function onResetClick() {
		onStopClick();
		setTimer(0);
		setIntervalTag(0);
	}

	return (
		<div className="App">
			<button onClick={onStartClick}>Start</button>
			<button onClick={onStopClick}>Stop</button>
			<button onClick={onResetClick}>Reset</button>
			<br />
			<div>{timer}</div>
		</div>
	);
}