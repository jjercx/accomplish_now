import { Navigation } from 'react-native-navigation';
import Onboarding from './Onboarding';
import Home from './Home';
import CreateWelcomeAccount from './authentication/CreateWelcomeAccount';
import TermsAndConditions from './policies/TermsAndConditions';
import PrivacyPolicy from './policies/PrivacyPolicy';

export function initApp( action ) {
	switch ( action ) {
	case 'start': {
		Navigation.startSingleScreenApp( {
			screen: {
				screen: 'createWelcomeAccount',
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
	Navigation.registerComponent( 'onboarding', () => Onboarding );
	Navigation.registerComponent( 'home', () => Home );
	Navigation.registerComponent( 'createWelcomeAccount', () => CreateWelcomeAccount );
	Navigation.registerComponent( 'termsAndConditions', () => TermsAndConditions );
	Navigation.registerComponent( 'privacyPolicy', () => PrivacyPolicy );
}
