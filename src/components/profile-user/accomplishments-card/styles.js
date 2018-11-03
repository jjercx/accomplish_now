import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	contentWrapper: {
		paddingTop: hpd( HTP( 15 ) )
	},
	itemWrapper: {
		marginHorizontal: wpd( WTP( 10 ) ),
		alignItems: 'center',
		borderBottomColor: colors.lightGrey,
		borderBottomWidth: 1
	},
	itemWrapperLast: {
		marginHorizontal: wpd( WTP( 10 ) ),
		alignItems: 'center'
	},
	iconWrapper: {
		backgroundColor: colors.lightGrey,
		borderRadius: 100
	},
	textWrapper: {
		marginHorizontal: wpd( WTP( 10 ) )
	}
} );

export default styles;
