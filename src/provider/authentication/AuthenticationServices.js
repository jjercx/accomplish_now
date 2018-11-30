import Firebase from 'react-native-firebase';
import AuthenticationConfig from './AuthenticationConfig';

export default class AuthenticationServices {
	static createAccount( phone ) {
		return new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					AuthenticationConfig.endpointCreateUser + phone,
					{
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}
				);
				if ( response ) {
					let body = JSON.parse( response._bodyInit );
					if ( body.code !== 500 ) {
						resolve( body );
					} else {
						reject( body );
					}
				}
			} catch ( error ) {
				reject( error );
			}
		} );
	}

	static verifyAndSignIn( uid, code ) {
		return new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					AuthenticationConfig.endpointVerifyCode,
					{
						method: 'POST',
						body: JSON.stringify( {
							uid,
							code
						} ),
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}
				);
				if ( response ) {
					let body = JSON.parse( response._bodyInit );
					if ( body.code !== 500 ) {
						resolve( body );
					} else {
						reject( body );
					}
				}
			} catch ( error ) {
				reject( error );
			}
		} );
	}

	static loginUser( phone ) {
		return new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					AuthenticationConfig.endpointLoginUser + phone,
					{
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}
				);
				if ( response ) {
					let body = JSON.parse( response._bodyInit );
					if ( body.code !== 500 ) {
						resolve( body );
					} else {
						reject( body );
					}
				}
			} catch ( error ) {
				reject( error );
			}
		} );
	}

	static signWithToken( token ) {
		return AuthenticationConfig.FirebaseConnector.signWithCustomToken( token );
	}

	static verifyLogin( ) {
		return AuthenticationConfig.FirebaseConnector.verifyLogin();
	}

	static getUserData( ) {
		return AuthenticationConfig.FirebaseConnector.currentUserData( AuthenticationConfig.userPath );
	}

	static setUserProfile( data ) {
		const auth = Firebase.auth();
		const { uid } = auth.currentUser;
		return AuthenticationConfig
			.FirebaseConnector.update( `${AuthenticationConfig.userPath}/${uid}`, data );
	}

	static pushUserAccomplishment( data ) {
		const auth = Firebase.auth();
		const { uid } = auth.currentUser;
		return AuthenticationConfig
			.FirebaseConnector.setPush( `${AuthenticationConfig.userPath}/${uid}/accomplishments`, data.accomplishments );
	}

	static uploadImage( img ) {
		return AuthenticationConfig.FirebaseConnector.uploadImg( img, AuthenticationConfig.imgPath );
	}
}
