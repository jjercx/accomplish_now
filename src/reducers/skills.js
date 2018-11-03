import {
	GET_SKILLS
} from '../actions/types';

const initialState = {
	skills: [],
	isFetching: true
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_SKILLS:
			return { ...state, skills: action.payload, isFetching: false };
		default:
			return state;
	}
};
