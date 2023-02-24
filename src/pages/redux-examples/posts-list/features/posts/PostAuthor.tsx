import {useSelector} from 'react-redux';
import {selectAllUsers} from '../../app/usersSlice';
import {User} from '../../app/types';

type PostAuthorProps = {
	userId: string,
}

const PostAuthor = (props: PostAuthorProps) => {
	const users = useSelector(selectAllUsers);

	const author = users.find((user: User) => user.id === props.userId);

	return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
