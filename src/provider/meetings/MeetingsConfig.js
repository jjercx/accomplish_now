import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class MeetingsConfig {
	static get FirebaseConnector() {
		return firebaseConnector;
	}

	static get meetingsPath() {
		return '/meetings';
	}
}
