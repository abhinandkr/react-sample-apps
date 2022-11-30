import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from './types';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState: User[] = [
	{id: '0', name: 'Dude Lebowski'},
	{id: '1', name: 'Neil Young'},
	{id: '2', name: 'Dave Gray'},
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await axios.get(USERS_URL);
	return response.data;
});

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const selectAllUsers = (state: any) => state.usersSliceReducer;

export default usersSlice.reducer;
