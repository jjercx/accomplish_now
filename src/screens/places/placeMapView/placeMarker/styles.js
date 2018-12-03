import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		width: responsiveSize( 80 ),
		height: responsiveSize( 80 ),
		alignItems: 'center'
	},
	markerImage: {
		flex: 1
	},
	placeImage: {
		width: responsiveSize( 50 ),
		height: responsiveSize( 50 ),
		borderRadius: responsiveSize( 50 ) / 2,
		position: 'absolute',
		marginTop: responsiveSize( 10 )
	}
} );
