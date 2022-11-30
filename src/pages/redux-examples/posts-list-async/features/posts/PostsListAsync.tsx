import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, getPostsError, getPostsStatus, selectAllPosts} from '../../app/postsSlice';
import {store} from '../../app/store';
import PostsExcerpt from './PostsExcerpt';
import {Post} from '../../app/types';

export default function PostsListAsync() {
	const dispatch = useDispatch<typeof store.dispatch>();
	const posts = useSelector(selectAllPosts);
	const postsStatus = useSelector(getPostsStatus);
	const postsError = useSelector(getPostsError);

	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(fetchPosts());
		}
	}, [postsStatus, dispatch]);

	let content;
	if (postsStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (postsStatus === 'succeeded') {
		const orderedPosts = posts.slice().sort((a: Post, b: Post) => b.date.localeCompare(a.date));
		content = orderedPosts.map((post: Post) => <PostsExcerpt key={post.id} post={post}/>);
	} else if (postsStatus === 'failed') {
		content = <p>{postsError}</p>;
	}

	return (
		<section>
			<h2>Posts</h2>
			{content}
		</section>
	);
}
