import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightToPercent, widthToPercent } from '../../../utils/dimensions';
import spacings from '../../spacing/styles';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: wp( widthToPercent( 192 ) ),
		height: hp( heightToPercent( 105 ) )
	},
	wrapperOnboarding: {
		bottom: hp( '5%' ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: wp( widthToPercent( spacings.medium ) )
	},
	wrapperButtons: {
		flexDirection: 'row'
	},
	wrapperSubTitle: {
		height: hp( '15%' )
	},
	wrapperButton: {
		flex: 0.5
	}
};
