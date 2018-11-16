import FirebaseConnector from '../base/FirebaseConnector';


const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class NotificationConfig {
	static get firebaseConnector() {
		return firebaseConnector;
	}

	static get notificationsPath() {
	    return 'notifications';
	}

	static get fromPath() {
	    return 'from/uid';
	}

	static get toPath() {
		return 'to/uid';
	}
}
