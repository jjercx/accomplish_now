import UsersServices from '../provider/users/UsersServices';
import { GET_USER } from './types';

export const actGetUser = userId => ( dispatch ) => {
	UsersServices.getUser( userId ).then( ( userData ) => {
		dispatch( {
			type: GET_USER,
			payload: userData
		} );
	} );
};
