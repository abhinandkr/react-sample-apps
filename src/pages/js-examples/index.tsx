import {NavLink} from 'react-router-dom';

export {SetTimeoutExample} from './setTimeout';
export {CounterExample} from './counter';
export {default as AsyncExample} from './async-example';

export default function JsExamples() {
	const navs = [{
		to: '/async-example',
		title: 'Async Example',
	}, {
		to: '/counter',
		title: 'Counter',
	}, {
		to: '/set-timeout',
		title: 'setTimeout',
	}, {
		to: '/tree-of-tasks',
		title: 'Tree of tasks',
	}];
	return (
		<nav>
			<ul>{
				navs.map((nav, idx) => {
					return <li key={idx}>
						<NavLink to={nav.to}>{nav.title}</NavLink>
					</li>;
				})
			}</ul>
		</nav>
	);
}
