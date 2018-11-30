import Firebase from 'react-native-firebase';
import MessagesServices from '../provider/messages/MessagesServices';

import {
	GET_MESSAGE,
	MESSAGE_LIST,
	START_FETCHING_MESSAGES,
	SET_CURRENT_THREAD,
	GET_MESSAGES_BY_THREAD,
	MESSAGES_BY_THREAD_LIST,
	START_SENDING_MESSAGE,
	MESSAGE_ADDED_TO_THREAD,
	MESSAGE_TEXT_INPUT_CHANGED
} from './types';

export const actGetMessages = () => ( dispatch ) => {
	MessagesServices.getMessages( ( messages ) => {
		dispatch( {
			type: GET_MESSAGE,
			payload: messages || []
		} );
		let { currentUser } = Firebase.auth();
		let messageEntity = [];
		if ( messages ) {
			messages.forEach( ( msg ) => {
				let lastMessage = msg.latestMessage;
				let newMessageObj = {};
				let membersObj = Object.keys( msg.members );
				membersObj.map( ( eachKey ) => {
					if ( eachKey !== currentUser._user.uid ) {
						let member = msg.members[ eachKey ].basicInfo;
						newMessageObj.id = eachKey;
						newMessageObj.firstName = member.firstName;
						newMessageObj.lastName = member.lastName;
						newMessageObj.image = member.profilePhotoUrl;
					}
					return eachKey;
				} );
				newMessageObj.threadId = lastMessage.threadId;
				newMessageObj.createdOn = lastMessage.createdOn;
				newMessageObj.isRead = lastMessage.isRead;
				newMessageObj.text = lastMessage.text;
				messageEntity.push( newMessageObj );
			} );
			dispatch( {
				type: MESSAGE_LIST,
				payload: messageEntity
			} );
		}
	} );
};

export const actOpenConversation = threadId => ( dispatch ) => {
	dispatch( {
		type: SET_CURRENT_THREAD,
		payload: threadId
	} );
};

export const actGetMessagesByThreadId = threadId => ( dispatch ) => {
	dispatch( {
		type: START_FETCHING_MESSAGES
	} );

	MessagesServices.getThreadMessages( threadId, ( err, messages ) => {
		dispatch( {
			type: GET_MESSAGES_BY_THREAD,
			payload: messages
		} );

		const curUserId = Firebase.auth()._user.uid;

		let messageEntity = messages.map( ( msg ) => {
			const {
				id,
				createdOn,
				isRead,
				text,
				sender: {
					uid: senderId,
					basicInfo: {
						firstName,
						lastName,
						profilePhotoUrl: image
					}
				}
			} = msg;

			return {
				id,
				createdOn,
				isRead,
				text,
				senderId,
				firstName,
				lastName,
				image,
				send: ( senderId === curUserId )
			};
		} );

		dispatch( {
			type: MESSAGES_BY_THREAD_LIST,
			payload: messageEntity
		} );
	} );
};


export const actNewMessage = ( threadId, message, sender, userToken, receiverId ) => ( dispatch ) => {
	let { currentUser } = Firebase.auth();
	const newMessage = {
		createdOn: Date.now(),
		isRead: false,
		text: message,
		sender: {
			...sender,
			uid: currentUser._user.uid
		},
		threadId
	};

	dispatch( {
		type: START_SENDING_MESSAGE,
		payload: {
			...newMessage,
			id: String( Math.floor( Math.random() * 100000 ) + 1 )
		}
	} );

	MessagesServices.putNewMessage( newMessage, userToken, receiverId, () => {
		dispatch( {
			type: MESSAGE_ADDED_TO_THREAD
		} );
	} );
};

export const actInputTextChanged = newText => ( dispatch ) => {
	dispatch( {
		type: MESSAGE_TEXT_INPUT_CHANGED,
		payload: newText
	} );
};
