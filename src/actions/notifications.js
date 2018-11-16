import NotificationServices from '../provider/notifications/NotificationServices';
import { GET_FROM_NOTIFICATION, GET_TO_NOTIFICATION } from './types';

export const actGetFromNotification = () => ( dispatch ) => {
	NotificationServices.getFromNotifications( ( notifications ) => {
		dispatch( {
			type: GET_FROM_NOTIFICATION,
			payload: notifications
		} );
	} );
};

export const actGetToNotifications = () => ( dispatch ) => {
	NotificationServices.getToNotifications( ( notifications ) => {
		dispatch( {
			type: GET_TO_NOTIFICATION,
			payload: notifications
		} );
	} );
};
