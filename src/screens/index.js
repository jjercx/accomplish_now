import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import Onboarding from './Onboarding';
import Home from './Home';
import CreateWelcomeAccount from './authentication/CreateWelcomeAccount';
import BiggestChallenge from './authentication/BiggestChallenge';
import CurrentlyWorkingOn from './authentication/CurrentlyWorkingOn';
import TermsAndConditions from './policies/TermsAndConditions';
import PrivacyPolicy from './policies/PrivacyPolicy';
import AddSkills from './authentication/AddSkills';
import SetProfile from './authentication/SetProfile';
import CodeReceiveRegisterLogin from './authentication/CodeReceiveRegisterLogin';
import AboutMe from './authentication/AboutMe';
import AddAccomplishment from './authentication/AddAccomplishment';
import UserProfile from './UserProfile';
import Places from './Places';
import Meetings from './Meetings';
import Messages from './messages/Messages';
import PeopleNearby from './PeopleNearby';
import MessagesDetails from './messages/MessagesDetails';
import Notifications from './messages/Notifications';

export function initApp( action ) {
	switch ( action ) {
		case 'start': {
			Navigation.startSingleScreenApp( {
				screen: {
					screen: 'home',
					navigatorStyle: {
						navBarHidden: true
					}
				}
			} );
			break;
		}
		default:
			Navigation.startSingleScreenApp( {
				screen: {
					screen: 'onboarding',
					navigatorStyle: {
						navBarHidden: true
					}
				}
			} );
			break;
	}
}

// register all screens of the app (including internal ones)
export function registerScreens() {
	Navigation.registerComponent( 'onboarding', () => Onboarding, store, Provider );
	Navigation.registerComponent( 'home', () => Home, store, Provider );
	Navigation.registerComponent( 'createWelcomeAccount', () => CreateWelcomeAccount, store, Provider );
	Navigation.registerComponent( 'biggestChallenge', () => BiggestChallenge, store, Provider );
	Navigation.registerComponent( 'currentlyWorkingOn', () => CurrentlyWorkingOn, store, Provider );
	Navigation.registerComponent( 'termsAndConditions', () => TermsAndConditions );
	Navigation.registerComponent( 'privacyPolicy', () => PrivacyPolicy );
	Navigation.registerComponent( 'addSkills', () => AddSkills, store, Provider );
	Navigation.registerComponent( 'setProfile', () => SetProfile, store, Provider );
	Navigation.registerComponent( 'codeReceiveRegisterLogin', () => CodeReceiveRegisterLogin, store, Provider );
	Navigation.registerComponent( 'aboutMe', () => AboutMe );
	Navigation.registerComponent( 'addAccomplishment', () => AddAccomplishment );
	Navigation.registerComponent( 'userProfile', () => UserProfile, store, Provider );
	Navigation.registerComponent( 'places', () => Places );
	Navigation.registerComponent( 'messages', () => Messages, store, Provider );
	Navigation.registerComponent( 'meetings', () => Meetings );
	Navigation.registerComponent( 'peopleNearby', () => PeopleNearby );
	Navigation.registerComponent( 'messagesDetails', () => MessagesDetails );
	Navigation.registerComponent( 'notifications', () => Notifications );
}
