import { Navigation } from 'react-native-navigation';
import Onbording1 from './onboarding/Onbording1';

export function initApp(init) {
  switch (init) {
    case 'start': {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'accomplish.Onbording1',
          navigatorStyle: {
            navBarHidden: true
          }
        },
      });
      break;
    }
    case 'login': {
      Navigation.startSingleScreenApp({
        screen: {
          screen: ''
        }
      });
      break;
    }
    case 'app': {
      console.log('tab');
      // start tab app
      break;
    }
    default:
      Navigation.startSingleScreenApp({
        screen: {
          screen: ''
        }
      });
      break;
  }
}

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('accomplish.Onbording1', () => Onbording1);
}
