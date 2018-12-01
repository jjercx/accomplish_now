import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	contentWrapper: {
		paddingTop: responsiveSize( 15 )
	},
	itemWrapper: {
		marginHorizontal: responsiveSize( 10 ),
		alignItems: 'center',
		borderBottomColor: colors.lightGrey,
		borderBottomWidth: 1
	},
	itemWrapperLast: {
		marginHorizontal: responsiveSize( 10 ),
		alignItems: 'center'
	},
	iconWrapper: {
		backgroundColor: colors.lightGrey,
		borderRadius: 100
	},
	textWrapper: {
		marginHorizontal: responsiveSize( 10 )
	}
} );

export default styles;
