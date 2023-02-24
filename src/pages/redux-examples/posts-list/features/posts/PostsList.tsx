import {useSelector} from 'react-redux';
import {selectAllPosts} from '../../app/postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import {Post} from '../../app/types';

export default function PostsList() {
	const posts = useSelector(selectAllPosts);

	const orderedPosts = posts.slice().sort((a: Post, b: Post) => b.date.localeCompare(a.date));

	const renderedPosts = orderedPosts.map((post: Post) => {
		const {id, content, userId, title, date} = post;

		return (<article key={id}>
			<h3>{title}</h3>
			<p>{content.substring(0, 100)}</p>
			<p className="postCredit">
				<PostAuthor userId={userId}/>
				<TimeAgo timestamp={date}/>
			</p>
			<ReactionButtons post={post} />
		</article>);
	});

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	);
}
