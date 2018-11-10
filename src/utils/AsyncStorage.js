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
}

module.exports = AppAsyncStorage;
