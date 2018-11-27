import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class PeopleNearbyConfig {
	static get firebaseConnector() {
		return firebaseConnector;
	}

	static get peopleNerbyPath() {
	    return 'users';
	}
}
