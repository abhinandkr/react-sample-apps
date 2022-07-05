import {NavLink} from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/helloworld'}>Hello world</NavLink>
				</li>
				<li>
					<NavLink to={'/stop-watch'}>Stopwatch</NavLink>
				</li>
				<li>
					<NavLink to={'/fetch-data'}>Fetch Data</NavLink>
				</li>
				<li>
					<NavLink to={'/dynamic-list'}>Dynamic List</NavLink>
				</li>
			</ul>
		</nav>
	);
}