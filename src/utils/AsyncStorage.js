import { AsyncStorage } from 'react-native';

let TOKEN = '@token:key';

class AppAsyncStorage {
	static setSessionToken( token ) {
		return AsyncStorage.setItem( TOKEN, token );
	}

	static getSessionToken() {
		return AsyncStorage.getItem( TOKEN );
	}

	static removeSessionToken() {
		return AsyncStorage.removeItem( TOKEN );
	}
}

module.exports = AppAsyncStorage;
