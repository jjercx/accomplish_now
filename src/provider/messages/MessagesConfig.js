import Firebase from 'react-native-firebase';
import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class AuthConfig {
	static get FirebaseConnector() {
		return firebaseConnector;
	}

	static get chatThreadsPath() {
		return 'chatThreads';
	}

	static get membersPath() {
		let { currentUser } = Firebase.auth();
		return `members/${currentUser._user.uid}/uid`;
	}
}