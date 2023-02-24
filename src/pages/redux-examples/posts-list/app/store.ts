import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from './postsSlice';
import usersSliceReducer from './usersSlice';

export const store = configureStore({
    reducer: {
        postsSliceReducer,
        usersSliceReducer,
    },
});
