class Meeting {
	constructor(
		person,
		meetingId,
		profilePict,
		date,
		state,
		text ) {
		this.person = person;
		this.profilePict = profilePict;
		this.meetingId = meetingId;
		this.date = date;
		this.state = state;
		this.text = text;
	}
}

export default Meeting;

export const MeetingState = Object.freeze( {
	REQUESTED: 1,
	ACCEPTED: 2,
	REJECTED: 3,
	FINISHED: 4
} );

export function getStateName( state ) {
	switch ( state ) {
		case MeetingState.REQUESTED:
			return 'Requested';
		case MeetingState.ACCEPTED:
			return 'Accepted';
		case MeetingState.REJECTED:
			return 'Rejected';
		case MeetingState.FINISHED:
			return 'Finished';
		default:
			return '';
	}
}
