import {useDispatch} from 'react-redux';
import {reactionAdded} from '../../app/postsSlice';
import {Post} from '../../app/types';

const reactionEmoji = {
	thumbsUp: '👍',
	wow: '😮',
	heart: '❤️',
	rocket: '🚀',
	coffee: '☕',
};

type ReactionButtonsProps = {
	post: Post;
}

const ReactionButtons = (props: ReactionButtonsProps) => {
	const dispatch = useDispatch();

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				className="reactionButton"
				onClick={() =>
					dispatch(reactionAdded({postId: props.post.id, reaction: name}))
				}
			>
				{/*@ts-ignore*/}
				{emoji} <span style={{color: 'grey'}}>{props.post.reactions[name]}</span>
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
