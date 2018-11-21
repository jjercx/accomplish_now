import { combineReducers } from 'redux';
import skills from './skills';
import authentication from './authentication';
import messages from './messages';
import notifications from './notifications';
import peopleNearby from './peopleNearby';

const rootReducer = combineReducers( {
	skills,
	authentication,
	messages,
	notifications,
	peopleNearby
} );

export default rootReducer;
