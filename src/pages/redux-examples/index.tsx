import {NavLink} from 'react-router-dom';

export {default as ReduxExample1} from './example-1';
export {default as ReduxCounter} from './counter';
export {default as PostsList} from './posts-list';
export {default as PostsListAsync} from './posts-list-async';


export default function ReduxExamples() {
	const navs = [{
		to: '/redux-example-1',
		title: 'Redux example 1',
	}, {
		to: '/redux-counter',
		title: 'Redux Counter',
	}, {
		to: '/posts-list',
		title: 'Posts List',
	}, {
		to: '/posts-list-async',
		title: 'Posts List Async',
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
