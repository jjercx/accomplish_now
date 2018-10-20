import { Navigation } from 'react-native-navigation';
import Onboarding from './Onboarding';
import CreateAccount from './account/CreateAccount';
import Home from './Home';

export function initApp( action ) {
	switch ( action ) {
	case 'start': {
		Navigation.startSingleScreenApp( {
			screen: {
				screen: 'createAccount',
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
	Navigation.registerComponent( 'createAccount', () => CreateAccount );
	Navigation.registerComponent( 'home', () => Home );
}
