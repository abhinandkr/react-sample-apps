export function SetTimeoutExample() {
	f3(10);

	return (
		<>
		</>
	);
}

function f1(n: number) {
	for (var i = 1; i <= n; i++) {
		window.setTimeout(() => console.log(i), i * 1000);
	}
}

function f2(n: number) {
	for (let i = 1; i <= n; i++) {
		window.setTimeout(() => console.log(i), i * 1000);
	}
}

function f3(n: number) {
	for (var i = 1; i <= n; i++) {
		// @ts-ignore
		function close(x: number) {
			window.setTimeout(() => console.log(x), x * 1000);
		}

		close(i);
	}
}
