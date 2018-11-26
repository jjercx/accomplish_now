import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';
import notifications from './notifications';
import people from './people';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages,
	form: formReducer,
	people,
	notifications
} );

export default rootReducer;
