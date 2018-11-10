import {
	SET_USER,
	SET_USER_TOKEN
} from '../actions/types';

const initialState = {
	user_phone: null
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_USER:
			return { ...state, user: action.payload, isFetching: false };
		case SET_USER_TOKEN:
			return { ...state, user_token: action.payload, isFetching: false };
		default:
			return state;
	}
};
