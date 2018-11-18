class Place {
	constructor(
		id,
		name,
		image,
		latitude,
		longitude ) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.coordinate = {
			latitude,
			longitude
		};
	}
}

export default Place;
