import { combineReducers } from 'redux';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';
import notifications from './notifications';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages,
	notifications
} );

export default rootReducer;
