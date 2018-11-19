import Firebase from 'react-native-firebase';
import MessagesConfig from './MessagesConfig';

export default class AuthenticationServices {
	static getMessages( callback ) {
		let { currentUser } = Firebase.auth();
		return MessagesConfig.FirebaseConnector.getByQuery( MessagesConfig.chatThreadsPath,
			MessagesConfig.membersPath, currentUser._user.uid, callback );
	}

	static getThreadMessages( threadId, callback ) {
		MessagesConfig.FirebaseConnector.get(
			MessagesConfig.chatThreadsPath,
			threadId
		).then( ( snap ) => {
			if ( snap ) {
				Object.keys( snap.messages ).forEach( ( msgId ) => {
					snap.messages[ msgId ].id = msgId;
				} );

				const messages = Object.values( snap.messages );
				messages.sort( ( a, b ) => a.createdOn - b.createdOn );
				callback( null, messages );
			} else {
				callback( null, [] );
			}
		} ).catch( err => callback( err ) );
	}
}
