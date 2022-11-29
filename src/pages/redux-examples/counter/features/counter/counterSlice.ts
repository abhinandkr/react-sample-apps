import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {State} from '../../app/types';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state: State) => {
			state.count += 1;
		},
		decrement: (state: State) => {
			state.count -= 1;
		},
		reset: (state: State) => {
			state.count = 0;
		},
		incrementByAmount: (state: State, action: PayloadAction<State['count']>) => {
			state.count += action.payload;
		},
	},
});

export const {
	increment,
	decrement,
	reset,
	incrementByAmount,
} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
