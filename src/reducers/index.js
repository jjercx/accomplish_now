import { combineReducers } from 'redux';
import skills from './skills';
import authentication from './authentication';

const rootReducer = combineReducers( {
	skills,
	authentication
} );

export default rootReducer;
