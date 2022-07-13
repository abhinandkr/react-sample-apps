function timeOut(time: number, taskName: string) {
	return new Promise((resolve) => {
		window.setTimeout(() => {
			return resolve(`${taskName} done in ${time} ms`);
		}, time);
	});
}

async function execInParallel(...promises: Promise<any>[]) {
	const allPromises = Promise.all(promises).then(([...outputs]) => {
		outputs.forEach((output) => {
			console.log(output);
		});
	});
	return await allPromises;
}

// @ts-ignore
async function execute(tasks, allDone) {
	await execInParallel(tasks[0].task, tasks[1].task, tasks[2].task);
	console.log(await tasks[3].task);
	console.log(await tasks[4].task);
	allDone();
}

export default function TreeOfTasks() {
	const tasks = [{
		name: 'A',
		task: timeOut(8000, 'A'),
	}, {
		name: 'B',
		task: timeOut(1000, 'B'),
	}, {
		name: 'C',
		task: timeOut(1000, 'C'),
	}, {
		name: 'D',
		task: timeOut(1000, 'D'),
	}, {
		name: 'E',
		task: timeOut(1000, 'E'),
	}];

	execute(tasks, () => console.log('Done')).then(r => {
	});

	return (
		<>{

		}</>
	);
}