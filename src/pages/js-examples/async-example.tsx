import {useEffect} from 'react';

export default function AsyncExample() {
	async function func() {
		await sleep(5000);
		console.log(`Calling function callRegularFunction`);
		callRegularFunction();

		await sleep(5000);
		console.log(`Calling function callFunctionWithCallback`);
		callFunctionWithCallback();

		await sleep(5000);
		console.log(`Calling function callFunctionWithPromise`);
		callFunctionWithPromise();

		await sleep(5000);
		console.log(`Calling function callFunctionWithAsync`);
		callFunctionWithAsync();
	}

	useEffect(() => {
		func().then(r => {
		});
	});

	return (
		<></>
	);
}

function sleep(ms: number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Timer done');
		}, ms);
	});
}

function callRegularFunction() {
	// console.log('begin - loginRegularFunction');
	loginRegularFunction('abc@gmail.com', '1234');
	// console.log('end - loginRegularFunction');
}

function loginRegularFunction(email: string, password: string) {
	let d = {usertoken: 'randomId'};
	setTimeout(() => {
		console.log(d.usertoken);
	}, 100);
}


function callFunctionWithCallback() {
	// console.log('begin - callFunctionWithCallback');
	loginWithCallback('abc@gmail.com', '1234', (obj: any) => console.log(obj.usertoken));
	// console.log('end - callFunctionWithCallback');
}

function loginWithCallback(email: string, password: string, callback: ({}) => void) {
	setTimeout(() => {
		callback({usertoken: 'randomId'});
	}, 3000);
}

function callFunctionWithPromise() {
	// console.log('begin - callFunctionWithPromise');
	const promise = loginWithPromise('abc@gmail.com', '1234');
	promise.then((v: any) => {
		console.log(v.usertoken);
	});
	// console.log('end - callFunctionWithPromise');
}

function callFunctionWithAsync() {
	// console.log('begin - callFunctionWithAsync');

	async function func() {
		const user: any = await loginWithPromise('abc@gmail.com', '1234');
		console.log(user.usertoken);
	}

	func();
	// console.log('end - callFunctionWithAsync');
}

function loginWithPromise(email: string, password: string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({usertoken: 'randomId'});
		}, 3000);
	});
}








