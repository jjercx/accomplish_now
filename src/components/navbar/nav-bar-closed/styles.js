import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default {
	navBarClose: {
		width: wpd( WTP( 185 ) ),
		height: hpd( HTP( 28 ) ),
		backgroundColor: colors.white,
		borderTopLeftRadius: 36,
		borderTopRightRadius: 36,
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 1,
			height: -3
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 2,
		zIndex: 2
	},
	imgArrowUp: {
		width: wpd( WTP( 13.3 ) ),
		height: hpd( HTP( 8 ) )
	}
};
