import { Navigation } from "react-native-navigation";
import Onboarding from "./onboarding/Onboarding";
import CreateAccount from "./createAccount/CreateAccount";

export function initApp(action) {
  switch (action) {
    case "start": {
      Navigation.startSingleScreenApp({
        screen: {
          screen: "accomplish.CreateAccount",
          navigatorStyle: {
            navBarHidden: true
          }
        }
      });
      break;
    }
    default:
      Navigation.startSingleScreenApp({
        screen: {
          screen: "accomplish.Onboarding",
          navigatorStyle: {
            navBarHidden: true
          }
        }
      });
      break;
  }
}

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("accomplish.Onboarding", () => Onboarding);
  Navigation.registerComponent("accomplish.CreateAccount", () => CreateAccount);
}
