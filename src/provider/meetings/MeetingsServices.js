import MeetingsConfig from './MeetingsConfig';

export default class MeetingsServices {
	static getMeetings() {
		MeetingsConfig.FirebaseConnector.getByQuery( MeetingsConfig.meetingsPath );
	}
}
