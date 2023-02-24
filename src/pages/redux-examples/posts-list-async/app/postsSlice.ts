import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {sub} from 'date-fns';
import axios from 'axios';
import {Post, PostReaction, State} from './types';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState: State = {
	posts: [],
	status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await axios.get(POSTS_URL);
	return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: { title: string, body: string, userId: string }) => {
	const response = await axios.post(POSTS_URL, initialPost);
	return response.data;
});

function postAddedReducer(state: State, action: PayloadAction<Post>) {
		state.posts.push(action.payload);
}

function reactionAddedReducer(state: State, action: PayloadAction<PostReaction>) {
	const {postId, reaction} = action.payload;
	const existingPost = state.posts.find(post => post.id === postId);
	if (existingPost) {
		// @ts-ignore
		existingPost.reactions[reaction]++;
	}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: postAddedReducer,
		reactionAdded: reactionAddedReducer,
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state: State) => {
				state.status = 'loading';
			})
			.addCase(fetchPosts.fulfilled, (state: State, action: PayloadAction<Post[]>) => {
				state.status = 'succeeded';
				// Adding date and reactions
				let min = 1;
				const loadedPosts = action.payload.map((post: Post) => {
					post.date = sub(new Date(), {minutes: min++}).toISOString();
					post.reactions = {
						thumbsUp: 0,
						wow: 0,
						heart: 0,
						rocket: 0,
						coffee: 0,
					};
					return post;
				});

				// Add any fetched posts to the array
				state.posts = state.posts.concat(loadedPosts);
			})
			.addCase(fetchPosts.rejected, (state: State, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				// Fix for API post IDs:
				// Creating sortedPosts & assigning the id
				// would be not be needed if the fake API
				// returned accurate new post IDs
				const sortedPosts = state.posts.sort((a, b) => {
					if (a.id > b.id) return 1;
					if (a.id < b.id) return -1;
					return 0;
				});
				action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
				// End fix for fake API post IDs

				action.payload.userId = Number(action.payload.userId);
				action.payload.date = new Date().toISOString();
				action.payload.reactions = {
					thumbsUp: 0,
					wow: 0,
					heart: 0,
					rocket: 0,
					coffee: 0,
				};
				console.log(action.payload);
				state.posts.push(action.payload);
			});
	},
});

export const selectAllPosts = (state: any) => state.postsSliceReducer.posts;
export const getPostsStatus = (state: any) => state.postsSliceReducer.status;
export const getPostsError = (state: any) => state.postsSliceReducer.error;

export default postsSlice.reducer;
export const {reactionAdded} = postsSlice.actions;

