class Person {
	constructor(
		id,
		firstName,
		lastName,
		job,
		image,
		computedSkills,
		aboutMe,
		biggestChallenge,
		currentlyWorkingOn,
		accomplishments,
		state
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.job = job;
		this.image = image;
		this.skills = computedSkills;
		this.aboutMe = aboutMe;
		this.biggestChallenge = biggestChallenge;
		this.currentlyWorkingOn = currentlyWorkingOn;
		this.accomplishments = accomplishments;
		this.state = state;
	}
}

export default Person;

export const PersonState = Object.freeze( {
	AVAILABLE: 1
} );
