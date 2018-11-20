import {
	GET_MESSAGE,
	MESSAGE_LIST,
	SET_CURRENT_THREAD,
	GET_MESSAGES_BY_THREAD,
	MESSAGES_BY_THREAD_LIST,
	START_FETCHING_MESSAGES,
	START_SENDING_MESSAGE,
	MESSAGE_ADDED_TO_THREAD
} from '../actions/types';

const initialState = {
	messages: [],
	isFetching: true,
	messageData: [],
	activeThreadId: '',
	threadMessages: [],
	threadData: [],
	isSending: false
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case START_FETCHING_MESSAGES:
			return { ...state, isFetching: true };
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
		case START_SENDING_MESSAGE:
			return { ...state, isSending: true };
		case MESSAGE_ADDED_TO_THREAD:
			return { ...state, isSending: false };
		default:
			return state;
	}
};
