import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class AuthConfig {
	static get FirebaseConnector() {
		return firebaseConnector;
	}

	static get userPath() {
		return '/users';
	}

	static get endpointCreateUser() {
		return 'https://us-central1-accomplishtest-66926.cloudfunctions.net/createUser?phone=';
	}

	static get endpointVerifyCode() {
		return 'https://us-central1-accomplishtest-66926.cloudfunctions.net/verifyCode';
	}

	static get endpointLoginUser() {
		return 'https://us-central1-accomplishtest-66926.cloudfunctions.net/loginUser?phone=';
	}
}
