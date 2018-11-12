import { combineReducers } from 'redux';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages
} );

export default rootReducer;
