import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages,
	form: formReducer
} );

export default rootReducer;
