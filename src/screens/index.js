import { Navigation } from 'react-native-navigation';
import Onboarding from './Onboarding';
import Home from './Home';
import CreateWelcomeAccount from './authentication/CreateWelcomeAccount';

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
	Navigation.registerComponent( 'onboarding', () => Onboarding );
	Navigation.registerComponent( 'home', () => Home );
	Navigation.registerComponent( 'createWelcomeAccount', () => CreateWelcomeAccount );
}
