import { Dimensions } from 'react-native';

let { width, height } = Dimensions.get( 'window' );
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0100;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export {
	LATITUDE,
	LONGITUDE,
	LATITUDE_DELTA,
	LONGITUDE_DELTA
};
