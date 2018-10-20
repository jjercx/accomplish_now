import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../../theme/fonts';
import { HTP } from '../../utils/dimensions';

export default {
	input: {
		fontSize: hp( HTP( 17 ) ),
		fontFamily: fonts.productSansRegular,
		height: hp( HTP( 35 ) ),
		paddingBottom: 0,
		paddingLeft: 0,
		paddingTop: 0
	},
	label: {
		fontSize: hp( HTP( 16 ) ),
		fontFamily: fonts.productSansRegular
	}
};
