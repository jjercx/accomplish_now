import PeopleNearbyConfig from './PeopleNearbyConfig';

export default class PeopleNearbyServices {
	static getPeople( callback ) {
		return PeopleNearbyConfig.firebaseConnector.listener( PeopleNearbyConfig.peopleNerbyPath,
			callback );
	}
}
