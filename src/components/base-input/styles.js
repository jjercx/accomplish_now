import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../../theme/fonts';
import { heightToPercent } from '../../utils/dimensions';

export default {
	input: {
		fontSize: hp( heightToPercent( 17 ) ),
		fontFamily: fonts.productSansRegular,
		height: hp( heightToPercent( 35 ) ),
		paddingBottom: 0,
		paddingLeft: 0,
		paddingTop: 0
	},
	label: {
		fontSize: hp( heightToPercent( 16 ) ),
		fontFamily: fonts.productSansRegular
	}
};
