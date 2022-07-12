import {NavLink} from "react-router-dom";

export default function NavBar() {
	const navs = [{
		to: '/helloworld',
		title: 'Hello world',
	}, {
		to: '/stop-watch',
		title: 'Stopwatch',
	}, {
		to: '/fetch-data',
		title: 'Fetch data',
	}, {
		to: '/fetch-data-axios',
		title: 'Fetch data axios',
	}, {
		to: '/dynamic-list',
		title: 'Dynamic list',
	}, {
		to: '/tic-tac-toe',
		title: 'Tic tac toe',
	}, {
		to: '/redux-example-1',
		title: 'Redux example 1',
	}, {
		to: '/async-example',
		title: 'Async example',
	}];
	return (
		<nav>
			<ul>
				{navs.map((nav, idx) => {
					return <li key={idx}>
						<NavLink to={nav.to}>{nav.title}</NavLink>
					</li>
				})}
			</ul>
		</nav>
	);
}