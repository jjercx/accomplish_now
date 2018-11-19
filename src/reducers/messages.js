import {
	GET_MESSAGE,
	MESSAGE_LIST,
	SET_CURRENT_THREAD,
	GET_MESSAGES_BY_THREAD,
	MESSAGES_BY_THREAD_LIST
} from '../actions/types';

const initialState = {
	messages: [],
	isFetching: true,
	messageData: [],
	activeThreadId: '',
	threadMessages: [],
	threadData: []
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_MESSAGE:
			return { ...state, messageData: action.payload, isFetching: false };
		case MESSAGE_LIST:
			return { ...state, messages: action.payload, isFetching: false };
		case SET_CURRENT_THREAD:
			return { ...state, activeThreadId: action.payload };
		case GET_MESSAGES_BY_THREAD:
			return { ...state, threadData: action.payload, isFetching: false };
		case MESSAGES_BY_THREAD_LIST:
			return { ...state, threadMessages: action.payload, isFetching: false };
		default:
			return state;
	}
};
