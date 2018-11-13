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
