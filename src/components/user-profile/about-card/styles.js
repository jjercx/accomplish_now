import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	titleWrapper: {
		marginTop: responsiveSize( 20 )
	},
	textWrapper: {
		marginTop: responsiveSize( 5 )
	},
	contentWrapper: {
		marginBottom: responsiveSize( 10 )
	},
	buttonEdit: {
		zIndex: 2,
		position: 'absolute',
		top: responsiveSize( 20 ),
		right: responsiveSize( 20 )
	}
} );

export default styles;
