import Firebase from 'react-native-firebase';
import FirebaseConnector from '../base/FirebaseConnector';

const firebaseConnector = new FirebaseConnector( { timeout: 30000 } );

export default class MessagesConfig {
	static get FirebaseConnector() {
		return firebaseConnector;
	}

	static get membersPath() {
		let { currentUser } = Firebase.auth();
		return `members/${currentUser._user.uid}/uid`;
	}

	static get latestMessagePath() {
		return 'latestMessage';
	}

	static get threadIdPath() {
		return 'threadId';
	}

	static chatThreadsPath( threadId = '' ) {
		return ( threadId === '' )
			? 'chatThreads'
			: `chatThreads/${threadId}`;
	}

	static chatMessagesPath( threadId ) {
		return `chatThreads/${threadId}/messages`;
	}
}
