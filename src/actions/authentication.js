import Firebase from 'react-native-firebase';
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
			console.log( 'error createAccount', e );
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
			console.log( 'error loginUser', e );
			callback( e );
		} );
};

async function asyncLogOut() {
	let logOut = await AsyncStorage.removeUser();
	return logOut;
}

export const actLogOut = callback => ( dispatch ) => {
	asyncLogOut().then( () => {
		dispatch( {
			type: SET_USER_TOKEN,
			payload: null
		} );
		Firebase.auth().signOut().then( () => {
			callback();
		} );
	} ).catch( ( e ) => {
		console.log( 'error actLogOut', e );
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
			AuthenticationServices.signWithToken( token.token ).then( () => {
				AuthenticationServices.getUserData().then( ( user ) => {
					dispatch( {
						type: SET_USER,
						payload: user
					} );
					AsyncStorage.setUser( token.token );
					callback( 'ok' );
				} ).catch( ( e ) => {
					console.log( 'error getUserData', e );
				} );
			} ).catch( ( e ) => {
				console.log( 'error signWithToken', e );
			} );
		} )
		.catch( ( e ) => {
			console.log( 'error verifyAndSignIn', e );
			callback( e );
		} );
};

export const actVerifyLogin = callback => ( dispatch ) => {
	AuthenticationServices.verifyLogin().then( () => {
		AuthenticationServices.getUserData().then( ( user ) => {
			dispatch( {
				type: SET_USER,
				payload: user
			} );
			callback( 'ok' );
		} ).catch( ( e ) => {
			callback( e );
		} );
	} ).catch( ( e ) => {
		callback( e );
	} );
};

export const actSetProfileData = ( userData, callback ) => ( dispatch ) => {
	AuthenticationServices.setUserProfile( userData ).then( ( ) => {
		AuthenticationServices.getUserData().then( ( user ) => {
			dispatch( {
				type: SET_USER,
				payload: user
			} );
			callback( 'ok' );
		} ).catch( ( e ) => {
			console.log( 'error getUserData', e );
		} );
	} ).catch( ( e ) => {
		console.log( 'error setUserProfile', e );
	} );
};

export const actPushAccomplisment = ( userData, callback ) => ( dispatch ) => {
	AuthenticationServices.pushUserAccomplishment( userData ).then( ( ) => {
		AuthenticationServices.getUserData().then( ( user ) => {
			dispatch( {
				type: SET_USER,
				payload: user
			} );
			callback( 'ok' );
		} ).catch( ( e ) => {
			console.log( 'error getUserData', e );
		} );
	} ).catch( ( e ) => {
		console.log( 'error pushUserAccomplishment', e );
	} );
};

export const actUploadImg = ( source, callback ) => ( ) => {
	AuthenticationServices.uploadImage( source ).then( ( uri ) => {
		callback( uri );
	} ).catch( ( e ) => {
		console.log( 'Error al subir imagen', e );
	} );
};
