import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthToPercent, heightToPercent } from '../../../utils/dimensions';

export default {
	imageBackground: {
		height: hp( heightToPercent( 193 ) ),
		width: '100%'
	},
	wrapperUserInfo: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		flex: 1,
		marginLeft: wp( widthToPercent( 22 ) )
	}
};
