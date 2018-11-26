import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class PeopleConfig {
	static get firebaseConnector() {
		return firebaseConnector;
	}

	static get peoplePath() {
	    return 'users';
	}
}
