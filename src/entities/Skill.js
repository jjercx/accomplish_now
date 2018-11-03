class Skill {
	constructor(
		id,
		name,
		image ) {
		this.id = id;
		this.name = name;
		this.image = image;
	}
}

class ComputedSkill {
	constructor( skill, points ) {
		this.skill = skill;
		this.points = points;
	}
}

export default Skill;

export { ComputedSkill };
