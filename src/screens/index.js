import { Navigation } from 'react-native-navigation';
import Onboarding from './onboarding/Onboarding';

export function initApp( action ) {
	switch ( action ) {
	case 'start': {
		Navigation.startSingleScreenApp( {
			screen: {
				screen: 'accomplish.Onboarding',
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
				screen: 'accomplish.Onboarding',
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
	Navigation.registerComponent( 'accomplish.Onboarding', () => Onboarding );
}
