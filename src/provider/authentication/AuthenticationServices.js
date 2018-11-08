import AuthenticationConfig from './AuthenticationConfig';

export default class AuthenticationServices {
	static createAccount( phone ) {
		return new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					`https://us-central1-accomplishtest-66926.cloudfunctions.net/createUser?phone=${phone}`,
					{
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
					}
				);
				resolve( JSON.parse( response._bodyInit ) );
			} catch ( error ) {
				reject( error );
			}
		} );
	}

	static verifyAndSignIn( uid, code ) {
		return new Promise( async ( resolve, reject ) => {
			try {
				let response = await fetch(
					'https://us-central1-accomplishtest-66926.cloudfunctions.net/verifyCode',
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
				resolve( JSON.parse( response._bodyInit ) );
			} catch ( error ) {
				reject( error );
			}
		} );
	}

	static signWithToken( token ) {
		return AuthenticationConfig.FirebaseConnector.signWithCustomToken( token );
	}

	static verifyLogin() {
		return AuthenticationConfig.FirebaseConnector.verifyLogin( );
	}
}
