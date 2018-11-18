import Firebase from 'react-native-firebase';
import NotificationConfig from './NotificationConfig';

const auth = Firebase.auth();

export default class NotificationServices {
	static getFromNotifications( callback ) {
		const { uid } = auth.currentUser;
		return NotificationConfig.firebaseConnector.getByQuery( NotificationConfig.notificationsPath,
			NotificationConfig.fromPath, uid, callback );
	}

	static getToNotifications( callback ) {
	    const { uid } = auth.currentUser;
	    return NotificationConfig.firebaseConnector.getByQuery( NotificationConfig.notificationsPath,
			NotificationConfig.toPath, uid, callback );
	}
}
