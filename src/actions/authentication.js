import AuthenticationServices from '../provider/authentication/AuthenticationServices';
import { SET_USER, SET_USER_TOKEN } from './types';
import AsyncStorage from '../utils/AsyncStorage';

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

export const actLoginUser = ( phone, callback ) => ( dispatch ) => {
	AuthenticationServices.loginUser( phone )
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
				AuthenticationServices.getUserData().then( ( user ) => {
					dispatch( {
						type: SET_USER,
						payload: user
					} );
					AsyncStorage.setUser( token.token );
					callback( 'ok' );
				} );
			} );
		} )
		.catch( ( e ) => {
			callback( e );
		} );
};

export const actVerifyLogin = () => ( dispatch ) => {
	AuthenticationServices.verifyLogin().then( () => {
		AuthenticationServices.getUserData().then( ( user ) => {
			dispatch( {
				type: SET_USER,
				payload: user
			} );
		} );
	} );
};
