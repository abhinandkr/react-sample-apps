export function CounterExample() {
	const p = new Counter('Counter 1');
	setInterval(() => p.incrementCounter(), 1000);
	setInterval(() => p.decrementCounter(), 2000);

	return (
		<>
		</>
	);
}

function Counter(counterName) {
	let count = 0;
	this.incrementCounter = () => {
		count++;
		console.log(`${counterName} incrementCounter - Count: ${count}`);
	};
	this.decrementCounter = () => {
		count--;
		console.log(`${counterName} decrementCounter - Count: ${count}`);
	};
}
