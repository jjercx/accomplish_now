import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';
import notifications from './notifications';
import peopleNearby from './peopleNearby';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages,
	form: formReducer
	peopleNearby
} );

export default rootReducer;
