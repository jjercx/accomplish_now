import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get( 'window' );

export const H = height;
export const W = width;

export function heightToPercent( value ) {
	const percentHeight = ( value / H ) * 100;
	return percentHeight;
}

export function widthToPercent( value ) {
	const percentWidth = ( value / W ) * 100;
	return percentWidth;
}
