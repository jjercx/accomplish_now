import UsersConfig from './UsersConfig';

export default class UsersServices {
	static getUser( userId ) {
		return new Promise( ( resolve ) => {
			UsersConfig.firebaseConnector.get(
				UsersConfig.usersPath,
				userId
			).then( userData => resolve( {
				...userData,
				uid: userId
			 } ) );
		} );
	}
}
