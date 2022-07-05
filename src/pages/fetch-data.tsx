/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
 **/

import {useState} from "react";

interface IFetchData {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

export default function FetchData() {
	const url = "https://jsonplaceholder.typicode.com/users/1";
	let [data, setData] = useState<IFetchData>({email: "", id: 0, name: "", phone: "", username: "", website: ""});

	async function onFetchClick() {
		const response = await fetch(url);
		const data = await response.json();
		setData(data);
	}

	return (
		<>
			<button onClick={onFetchClick}>Fetch data</button>
			<br/>
			<>
				<strong>ID: </strong>{data.id}<br/>
				<strong>Name: </strong>{data.name}<br/>
				<strong>User name: </strong>{data.username}<br/>
				<strong>Email: </strong>{data.email}<br/>
				<strong>Phone: </strong>{data.phone}<br/>
				<strong>Website: </strong>{data.website}<br/>
			</>
		</>
	);
}