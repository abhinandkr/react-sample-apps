import {useEffect} from 'react';

export default function FetchQuestions() {
	const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
	const URL = 'https://www.algoexpert.io/api/fe/questions';

	async function fetchQuestions() {
		try {
			const res = await fetch(CORS_URL + URL);
			const json = await res.json();
			return json;
		} catch (e) {
			console.log(e);
		}
		// fetch(URL).then((value) => {
		// 	console.log(`value ${value.toString()}`);
		// }).catch((e) => {
		// 	console.error(e);
		// })
	}

	useEffect(() => {
		fetchQuestions().then(r => {
			console.log(r);
		});
	}, []);

	return (
		<>{

		}</>
	);
}