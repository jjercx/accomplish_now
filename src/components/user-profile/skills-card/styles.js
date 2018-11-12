import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	contentWrapper: {
		marginTop: hpd( HTP( 20 ) )
	},
	itemWrapper: {
		paddingVertical: hpd( HTP( 10 ) ),
		paddingLeft: hpd( HTP( 15 ) ),
		paddingRight: hpd( HTP( 25 ) ),
		backgroundColor: colors.tangerine,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 100
	},
	textWrapper: {
		flex: 1,
		paddingHorizontal: wpd( WTP( 10 ) )
	},
	buttonAdd: {
		marginTop: hpd( HTP( 25 ) ),
		marginBottom: 0
	}
} );

export default styles;
