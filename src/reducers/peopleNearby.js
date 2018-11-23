import { GET_PEOPLE_NERBY } from '../actions/types';

const initState = {
	isFetching: true,
	people: []
};

export default ( state = initState, action ) => {
	switch ( action.type ) {
		case GET_PEOPLE_NERBY:
			return { ...state, people: action.payload, isFetching: false };
		default:
			return state;
	}
};
