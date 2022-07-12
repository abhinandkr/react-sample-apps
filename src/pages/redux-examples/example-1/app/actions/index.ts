import {AnyAction} from '@reduxjs/toolkit';

const Actions = {
	'FETCH_USERS_REQUEST': 'FETCH_USERS_REQUEST',
	'FETCH_USERS_SUCCESS': 'FETCH_USERS_SUCCESS',
	'FETCH_USERS_FAILURE': 'FETCH_USERS_FAILURE',
};

function fetchUsersRequest(): AnyAction {
	return {
		type: Actions.FETCH_USERS_REQUEST,
	};
}

function fetchUsersSuccess(users: string[]): AnyAction {
	return {
		type: Actions.FETCH_USERS_SUCCESS,
		payload: users,
	};
}

function fetchUsersFailure(error: string): AnyAction {
	return {
		type: Actions.FETCH_USERS_FAILURE,
		payload: error,
	};
}


export {
	Actions,
	fetchUsersRequest,
	fetchUsersSuccess,
	fetchUsersFailure,
};
