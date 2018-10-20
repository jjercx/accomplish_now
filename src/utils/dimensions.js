import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get( 'window' );

export const H = height;
export const W = width;

/**
 * Transform a number of pixels of height to the correspondent
 	percent of the device screen
 */
export function HTP( value ) {
	const percentHeight = ( value / H ) * 100;
	return percentHeight;
}

/**
 * Transform a number of pixels of width to the correspondent
 	percent of the device screen
 */
export function WTP( value ) {
	const percentWidth = ( value / W ) * 100;
	return percentWidth;
}
