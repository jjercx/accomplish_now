import { GET_FROM_NOTIFICATION, GET_TO_NOTIFICATION } from '../actions/types';

const initialFromState = {
	fromNotifications: [],
	fromIsFetching: true,
	toIsFetching: true,
	toNotifications: []
};


export default ( state = initialFromState, action ) => {
	switch ( action.type ) {
		case GET_FROM_NOTIFICATION:
			return { ...state, fromNotifications: action.payload, isFetching: false };

		case GET_TO_NOTIFICATION:
			return { ...state, toNotifications: action.payload, toIsFetching: false };
		default:
			return state;
	}
};
