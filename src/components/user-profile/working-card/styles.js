import { StyleSheet } from 'react-native';

import { responsiveSize } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	textWrapper: {
		marginVertical: responsiveSize( 20 )
	},
	buttonEdit: {
		zIndex: 2,
		position: 'absolute',
		top: responsiveSize( 20 ),
		right: responsiveSize( 20 )
	}
} );

export default styles;
