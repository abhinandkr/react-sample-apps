export function counterExample() {
	const p = new Counter('Counter 1');
	setInterval(() => p.incrementCounter(), 1000);
	setInterval(() => p.decrementCounter(), 2000);

	return (
		<>
		</>
	);
}

class Counter {
	count = 0;
	counterName = '';
	constructor(counterName: string) {
		this.counterName = counterName;
	}
	incrementCounter() {
		this.count++;
		console.log(`${this.counterName} ${this.count}`);
	};
	decrementCounter() {
		this.count--;
		console.log(`${this.counterName} ${this.count}`);
	};
}
