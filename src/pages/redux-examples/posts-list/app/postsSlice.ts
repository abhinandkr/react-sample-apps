import {CaseReducerWithPrepare, createSlice, nanoid, type PayloadAction} from '@reduxjs/toolkit';
import {sub} from 'date-fns';
import {Post, PostReaction, State} from './types';

const initialPosts: Post[] = [{
	id: nanoid(),
	title: 'Learning Redux Toolkit',
	content: 'I\'ve heard good things.',
	userId: '',
	date: sub(new Date(), {minutes: 10}).toISOString(),
	reactions: {
		thumbsUp: 0,
		wow: 0,
		heart: 0,
		rocket: 0,
		coffee: 0,
	},
}, {
	id: nanoid(),
	title: 'Slices...',
	content: 'The more I say slice, the more I want pizza.',
	userId: '',
	date: sub(new Date(), {minutes: 5}).toISOString(),
	reactions: {
		thumbsUp: 0,
		wow: 0,
		heart: 0,
		rocket: 0,
		coffee: 0,
	},
}];

const postAddedReducer: CaseReducerWithPrepare<Post[], any> = {
	reducer(state: Post[], action: PayloadAction<Post>) {
		state.push(action.payload);
	},
	prepare(title: string, content: string, userId: string) {
		return {
			payload: {
				id: nanoid(),
				title,
				content,
				userId,
				date: new Date().toISOString(),
				reactions: {
					thumbsUp: 0,
					wow: 0,
					heart: 0,
					rocket: 0,
					coffee: 0,
				},
			},
		};
	},
};

function reactionAddedReducer(state: Post[], action: PayloadAction<PostReaction>) {
	const {postId, reaction} = action.payload;
	const existingPost = state.find(post => post.id === postId);
	if (existingPost) {
		// @ts-ignore
		existingPost.reactions[reaction]++;
	}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialPosts,
	reducers: {
		postAdded: postAddedReducer,
		reactionAdded: reactionAddedReducer,
	},
});

export const selectAllPosts = (state: State) => state.posts;

export default postsSlice.reducer;
export const {postAdded, reactionAdded} = postsSlice.actions;

