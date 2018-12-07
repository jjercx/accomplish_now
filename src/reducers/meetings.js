import { GET_MEETINGS } from '../actions/types';

const initialFromState = {
	meetings: [],
	isFetching: true
};


export default ( state = initialFromState, action ) => {
	switch ( action.type ) {
		case GET_MEETINGS:
			return { ...state, meetings: action.payload, isFetching: false };

		default:
			return state;
	}
};
