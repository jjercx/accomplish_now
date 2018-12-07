import Firebase from 'react-native-firebase';
import MessagesConfig from './MessagesConfig';

export default class MessagesServices {
	static getMessages( callback ) {
		let { currentUser } = Firebase.auth();
		return MessagesConfig.FirebaseConnector.getByQuery(
			MessagesConfig.chatThreadsPath(),
			MessagesConfig.membersPath,
			currentUser._user.uid,
			callback
		);
	}

	static getThreadMessages( threadId, callback ) {
		MessagesConfig.FirebaseConnector.getByQuery(
			MessagesConfig.chatMessagesPath( threadId ),
			MessagesConfig.threadIdPath,
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

	static putNewMessage( newMessage, userToken, receiverId, callback ) {
		Promise.all( [
			MessagesConfig.FirebaseConnector.setPush(
				MessagesConfig.chatMessagesPath( newMessage.threadId ),
				newMessage
			),
			MessagesConfig.FirebaseConnector.set(
				MessagesConfig.chatThreadsPath( newMessage.threadId ),
				newMessage,
				MessagesConfig.latestMessagePath
			)
		] ).then( () => new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					'https://us-central1-accomplishtest-66926.cloudfunctions.net/SendPushNotification',
					{
						method: 'POST',
						body: JSON.stringify( {
							message: newMessage.text,
							receiverUid: receiverId,
							title: `${newMessage.sender.basicInfo.firstName} ${newMessage.sender.basicInfo.lastName}`
						} ),
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${userToken}`
						}
					}
				);
				if ( response ) {
					let body = JSON.parse( response._bodyInit );
					if ( body.code !== 500 ) {
						callback( null );
						resolve( body );
					} else {
						callback( null );
						reject( body );
					}
				}
			} catch ( error ) {
				callback( null );
				reject( error );
			}
		} ) ).catch( e => callback( e ) );
	}
}
