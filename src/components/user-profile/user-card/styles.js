import { StyleSheet } from 'react-native';

import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		height: responsiveSize( 160 ),
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: responsiveSize( -45 )
	},
	avatarWrapper: {
		padding: responsiveSize( 7 ),
		backgroundColor: colors.white,
		borderRadius: 100
	},
	avatar: {
		width: responsiveSize( 100 ),
		height: responsiveSize( 100 ),
		borderRadius: responsiveSize( 50 )
	},
	jobTextWrapper: {
		marginTop: 4,
		marginBottom: 7
	},
	buttonEdit: {
		zIndex: 2,
		position: 'absolute',
		top: responsiveSize( 20 ),
		right: responsiveSize( 20 )
	},
	viewOverflowContainer: {
		position: 'absolute',
		top: responsiveSize( -50 )
	}
} );

export default styles;
