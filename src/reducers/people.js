import {
	GET_PEOPLE_NEARBY,
	GET_PEOPLE_SEARCH_RESULTS,
	START_SEARCHING_PEOPLE
} from '../actions/types';

const initState = {
	isFetching: false,
	peopleNearby: [],
	searchResults: []
};

export default ( state = initState, action ) => {
	switch ( action.type ) {
		case GET_PEOPLE_NEARBY:
			return { ...state, peopleNearby: action.payload, isFetching: false };
		case GET_PEOPLE_SEARCH_RESULTS:
			return { ...state, searchResults: action.payload, isFetching: false };
		case START_SEARCHING_PEOPLE:
			return { ...state, isFetching: true };
		default:
			return state;
	}
};
