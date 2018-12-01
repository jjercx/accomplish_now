import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		flexDirection: 'row',
		paddingHorizontal: 0
	},
	actionMessage: {
		flex: 45,
		alignItems: 'center',
		borderRightColor: colors.lightGrey,
		borderRightWidth: 1
	},
	actionSchedule: {
		flex: 55,
		alignItems: 'center'
	},
	icon: {
		marginBottom: responsiveSize( 15 )
	},
	textWrapper: {
		position: 'absolute',
		bottom: responsiveSize( -10 )
	}
} );

export default styles;
