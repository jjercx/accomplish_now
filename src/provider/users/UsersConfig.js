import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class UsersConfig {
	static get firebaseConnector() {
		return firebaseConnector;
	}

	static get usersPath() {
	    return 'users';
	}
}
