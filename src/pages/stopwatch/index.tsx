import React, {useState} from 'react';
import {StopwatchButton} from './stopwatch-button';
import StopwatchContext from './stopwatch-context';
import './index.css';

export default function Stopwatch() {
	const [timer, setTimer] = useState(0);
	const [intervalTag, setIntervalTag] = useState(0);

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
			<div className={'stopwatch'}>
				<div className={'timer'}>{timer}</div>
				<div className={'buttons'}>
					<StopwatchContext.Provider value={{onClick: onStartClick}}>
						<StopwatchButton>Start</StopwatchButton>
					</StopwatchContext.Provider>
					<StopwatchContext.Provider value={{onClick: onStopClick}}>
						<StopwatchButton>Stop</StopwatchButton>
					</StopwatchContext.Provider>
					<StopwatchContext.Provider value={{onClick: onResetClick}}>
						<StopwatchButton>Reset</StopwatchButton>
					</StopwatchContext.Provider>
				</div>
			</div>
		</div>
	);
}
