import { responsiveSize } from '../../utils/dimensions';
import colors from '../../theme/palette';

export default {
	container: {
		height: responsiveSize( 50 ),
		width: responsiveSize( 50 ),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	line: {
		height: responsiveSize( 1 ),
		width: responsiveSize( 45 ),
		borderRadius: 5
	},
	lineWithNumber: {
		backgroundColor: colors.charcoalGrey
	},
	lineWithoutNumber: {
		backgroundColor: colors.veryLightPink
	}
};
