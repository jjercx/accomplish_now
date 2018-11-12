import Firebase from 'react-native-firebase';
import MessagesConfig from './MessagesConfig';

export default class AuthenticationServices {
	static getMessages( callback ) {
		let { currentUser } = Firebase.auth();
		return MessagesConfig.FirebaseConnector.getByQuery( MessagesConfig.chatThreadsPath,
			MessagesConfig.membersPath, currentUser._user.uid, callback );
	}
}
