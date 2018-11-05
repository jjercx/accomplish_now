import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';
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
		marginBottom: hpd( HTP( 15 ) )
	},
	textWrapper: {
		position: 'absolute',
		bottom: hpd( HTP( -10 ) )
	}
} );

export default styles;
