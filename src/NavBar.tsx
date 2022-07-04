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
					<NavLink to={'/Stopwatch'}>Stopwatch</NavLink>
				</li>
				<li>
					<NavLink to={'/fetchdata'}>Fetch Data</NavLink>
				</li>

			</ul>
		</nav>
	);
}