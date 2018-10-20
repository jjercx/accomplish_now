import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import spacings from '../../spacing/styles';
import { heightToPercent, widhtToPercent } from '../../../utils/dimensions';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: wp( widhtToPercent( 192 ) ),
		height: hp( heightToPercent( 105 ) )
	},
	wrapperOnboarding: {
		bottom: hp( '5%' ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: wp( widhtToPercent( spacings.medium ) )
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
