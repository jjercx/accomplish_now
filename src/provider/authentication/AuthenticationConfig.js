import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class AuthConfig {
	static get FirebaseConnector() {
		return firebaseConnector;
	}

	static get endpointUsers() {
		return '/users';
	}
}
