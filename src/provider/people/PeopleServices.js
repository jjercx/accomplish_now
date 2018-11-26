import PeopleConfig from './PeopleConfig';

export default class PeopleServices {
	static getPeopleNearby( callback ) {
		return PeopleConfig.firebaseConnector.listener(
			PeopleConfig.peoplePath,
			callback
		);
	}

	static getPeople( callback ) {
		return PeopleConfig.firebaseConnector.listener(
			PeopleConfig.peoplePath,
			callback
		);
	}
}
