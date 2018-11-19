import Firebase from 'react-native-firebase';
import MessagesServices from '../provider/messages/MessagesServices';
import { GET_MESSAGE, MESSAGE_LIST } from './types';

export const actGetMessages = () => ( dispatch ) => {
	MessagesServices.getMessages( ( messages ) => {
		dispatch( {
			type: GET_MESSAGE,
			payload: messages
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
