import {Actions} from '../actions';
import {AnyAction} from '@reduxjs/toolkit';

type State = {
	loading: boolean;
	users: string[] | null;
	error: string | null;
};

const initialState: State = {
	loading: false,
	users: [],
	error: '',
};

const reducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case Actions.FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case Actions.FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: null,
			};
		case Actions.FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				users: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export {
	reducer,
};
