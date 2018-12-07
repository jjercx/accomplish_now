import { AsyncStorage } from 'react-native';

let USER = '@user:key';

class AppAsyncStorage {
	static setUser( user ) {
		return AsyncStorage.setItem( USER, user );
	}

	static getUser() {
		return AsyncStorage.getItem( USER );
	}

	static removeUser() {
		return AsyncStorage.removeItem( USER );
	}

	static setItem( key, value ) {
		return AsyncStorage.setItem( key, JSON.stringify( value ) );
	}

	static async getItem( key ) {
		return AsyncStorage.getItem( key ).then( ( result ) => {
			if ( result ) {
				try {
					result = JSON.parse( result );
				} catch ( e ) {
					console.error(
						`AsyncStorage#getItem error deserializing JSON for key: ${key}`,
						e.message
					);
				}
			}
			return result;
		} );
	}

	static async removeItem( key ) {
		return AsyncStorage.removeItem( key );
	}
}

module.exports = AppAsyncStorage;
