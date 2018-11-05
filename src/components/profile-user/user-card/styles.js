import { StyleSheet } from 'react-native';

import {
	widthPercentageToDP as wpd,
	heightPercentageToDP as hpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		height: hpd( HTP( 160 ) ),
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: hpd( HTP( -45 ) )
	},
	avatarWrapper: {
		padding: hpd( HTP( 7 ) ),
		backgroundColor: colors.white,
		position: 'absolute',
		top: hpd( HTP( -50 ) ),
		borderRadius: 100
	},
	avatar: {
		width: wpd( WTP( 100 ) ),
		height: hpd( HTP( 100 ) )
	},
	jobTextWrapper: {
		marginTop: 4,
		marginBottom: 7
	}
} );

export default styles;
