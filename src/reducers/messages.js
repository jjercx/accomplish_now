import {
	GET_MESSAGE,
	MESSAGE_LIST
} from '../actions/types';

const initialState = {
	messages: [],
	isFetching: true,
	messageData: []
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_MESSAGE:
			return { ...state, messageData: action.payload, isFetching: false };
		case MESSAGE_LIST:
			return { ...state, messages: action.payload, isFetching: false };
		default:
			return state;
	}
};
