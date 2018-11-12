import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	container: {
		marginHorizontal: wpd( WTP( 20 ) ),
		paddingVertical: hpd( HTP( 20 ) ),
		paddingHorizontal: wpd( WTP( 25 ) ),
		backgroundColor: colors.white,
		borderRadius: 10
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	icon: {
		marginRight: wpd( WTP( 20 ) )
	}
} );

export default styles;
