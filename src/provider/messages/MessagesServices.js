import Firebase from 'react-native-firebase';
import MessagesConfig from './MessagesConfig';

export default class MessagesServices {
	static getMessages( callback ) {
		let { currentUser } = Firebase.auth();
		return MessagesConfig.FirebaseConnector.getByQuery( MessagesConfig.chatThreadsPath,
			MessagesConfig.membersPath, currentUser._user.uid, callback );
	}

	static getThreadMessages( threadId, callback ) {
		MessagesConfig.FirebaseConnector.getByQuery(
			MessagesConfig.chatMessagesPath( threadId ),
			'threadId',
			threadId,
			( rows ) => {
				if ( rows ) {
					Object.keys( rows ).forEach( ( msgId ) => {
						rows[ msgId ].id = msgId;
					} );

					const messages = Object.values( rows );
					messages.sort( ( a, b ) => a.createdOn - b.createdOn );
					callback( null, messages );
				} else {
					callback( null, [] );
				}
			}
		);
	}

	static putNewMessage( newMessage, callback ) {
		MessagesConfig.FirebaseConnector.setPush(
			MessagesConfig.chatMessagesPath( newMessage.threadId ),
			newMessage
		).then( () => callback( null ) ).catch( e => callback( e ) );
	}
}
