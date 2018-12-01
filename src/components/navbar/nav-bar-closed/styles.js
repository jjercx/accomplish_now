import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default {
	navBarClose: {
		width: responsiveSize( 185 ),
		height: responsiveSize( 28 ),
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
		width: responsiveSize( 13.3 ),
		height: responsiveSize( 8 )
	}
};
