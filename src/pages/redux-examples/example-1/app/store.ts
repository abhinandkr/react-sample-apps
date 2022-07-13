import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {reducer} from './reducers';
import {fetchUsersRequest, fetchUsersSuccess} from './actions';

export const store = configureStore({
	reducer: {
		reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		createLogger()),
});

export function initApp() {
	console.log('initial state', store.getState());
	const unsubscribe = store.subscribe(() => {
	});
	store.dispatch(fetchUsersRequest());
	console.log(store.getState());
	store.dispatch(fetchUsersSuccess(['Alice', 'Bob']));
	console.log(store.getState());
	unsubscribe();
}

