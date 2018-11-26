import {
	GET_USER
} from '../actions/types';

const initialState = {
	searchedUser: {},
	isFetching: true
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_USER: {
			return {
				...state,
				searchedUser: action.payload,
				isFetching: false
			};
		}
		default:
			return state;
	}
};
