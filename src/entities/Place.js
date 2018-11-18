class Place {
	constructor(
		id,
		name,
		image,
		latitude,
		longitude,
		location,
		distance ) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.location = location;
		this.distance = distance;
		this.coordinate = {
			latitude,
			longitude
		};
	}
}

export default Place;
