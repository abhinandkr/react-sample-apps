export default function AsyncExample() {

	// const p: any = callRegularFunction();
	// console.log(p);

	// callFunctionWithCallback();
	// callFunctionWithPromise();
	callFunctionWithAsync();

	return(
		<></>
	);
}

function callRegularFunction() {
	console.log('a');
	loginRegularFunction("abc@gmail.com" , "1234");
	console.log('c');
}
function loginRegularFunction(email: string, password: string) {
	setTimeout(() => {
		return {usertoken: "randomId"}
	},3000);
}


function callFunctionWithCallback() {
	console.log('a');
	loginWithCallback("abc@gmail.com" , "1234", (obj: any) => console.log(obj.usertoken));
	console.log('c');
}
function loginWithCallback(email: string, password: string, callback: ({}) => void) {
	setTimeout(() => {
		callback({usertoken: "randomId"});
	},3000);
}

function callFunctionWithPromise() {
	console.log('a');
	const promise = loginWithPromise("abc@gmail.com" , "1234");
	promise.then((v: any) => {
		console.log(v.usertoken);
	});
	console.log('c');
}
function callFunctionWithAsync() {
	console.log('a');
	async function func() {
		const user: any = await loginWithPromise("abc@gmail.com" , "1234");
		console.log(user.usertoken);
	}
	func();
	console.log('c');
}
function loginWithPromise(email: string, password: string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({usertoken: "randomId"});
		}, 3000);
	});
}








