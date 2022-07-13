import {useEffect, useState} from 'react';

export default function FetchPost() {

	const [data, setData] = useState();

	function login() {
		const LOGIN_URL = 'https://reqres.in/api/login';
		return fetch(LOGIN_URL, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: 'eve.holt@reqres.in',
				password: 'cityslicka',
			}),
		});
		// if (loginResponse.ok) {
		// 	const createResponse = await fetch(CREATE_URL, {
		// 		method: 'post',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			name: 'morpheus',
		// 			job: 'leader',
		// 		}),
		// 	});
		// }
		// const data = await loginResponse.json();
		// return await loginResponse.json();
		// setData(data);
	}

	function createUser() {
		const CREATE_URL = 'https://reqres.in/api/users';
		return fetch(CREATE_URL, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'morpheus',
				job: 'leader',
			}),
		});
	}

	function getSingleUser(userId: string) {
		const CREATE_URL = `https://reqres.in/api/users/2`;
		return fetch(CREATE_URL);
	}


	useEffect(() => {
		async function fetchData() {
			const loginResponse = await login();
			if (loginResponse.ok) {
				const createResponse = await createUser();
				if (createResponse.ok) {
					const createResponseJson = await createResponse.json();
					const getSingleUserResponse = await getSingleUser(createResponseJson.id);
					const data = await getSingleUserResponse.json();
					setData(data);
				}
			}
		}

		fetchData().then(() => {
		});
	}, []);

	return (<>
		{JSON.stringify(data)}
	</>);
}