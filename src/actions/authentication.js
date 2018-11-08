import AuthenticationServices from '../provider/authentication/AuthenticationServices';
import { SET_USER, SET_USER_TOKEN } from './types';

export const actCreateAccount = ( phone, callback ) => ( dispatch ) => {
	AuthenticationServices.createAccount( phone )
		.then( ( payload ) => {
			dispatch( {
				type: SET_USER,
				payload: payload.user
			} );
			callback( payload.user );
		} )
		.catch( ( e ) => {
			callback( e );
		} );
};

export const actVerifyAndSignIn = ( uid, code, callback ) => ( dispatch ) => {
	AuthenticationServices.verifyAndSignIn( uid, code )
		.then( ( token ) => {
			dispatch( {
				type: SET_USER_TOKEN,
				payload: token.token
			} );
			AuthenticationServices.signWithToken( token.token ).then( ( ) => {
				callback( 'OK' );
			} );
		} )
		.catch( ( e ) => {
			callback( e );
		} );
};

export const actVerifyLogin = _callback => ( ) => {
	AuthenticationServices.verifyLogin().then( () => {
		_callback( 'ok' );
	} );
};
