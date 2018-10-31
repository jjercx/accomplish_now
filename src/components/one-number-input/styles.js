import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HTP, WTP, iPhoneSE } from '../../utils/dimensions';
import colors from '../../theme/palette';

export default {
	container: {
		height: hp( HTP( iPhoneSE() ? 40 : 50 ) ),
		width: wp( WTP( iPhoneSE() ? 40 : 50 ) )
	},
	line: {
		height: hp( HTP( 1 ) ),
		width: wp( WTP( iPhoneSE() ? 30 : 45 ) ),
		borderRadius: 5
	},
	lineWithNumber: {
		backgroundColor: colors.charcoalGrey
	},
	lineWithoutNumber: {
		backgroundColor: colors.veryLightPink
	}
};
