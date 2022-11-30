import {Post} from '../../app/types';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

interface Props {
	post: Post;
}

export default function PostsExcerpt(props: Props) {
	const {post} = props;
	const {id, body, userId, title, date} = post;
	return (
		<article key={id}>
			<h3>{title}</h3>
			<p>{body.substring(0, 100)}</p>
			<p className="postCredit">
				<PostAuthor userId={userId}/>
				<TimeAgo timestamp={date}/>
			</p>
			<ReactionButtons post={post} />
		</article>
	);
}
