import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';
import spacings from '../../spacing/styles';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: wpd( WTP( 192 ) ),
		height: hpd( HTP( 105 ) )
	},
	wrapperOnboarding: {
		bottom: hpd( '5%' ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: wpd( WTP( spacings.medium ) )
	},
	wrapperButtons: {
		flexDirection: 'row'
	},
	wrapperSubTitle: {
		height: hpd( '15%' )
	},
	wrapperButton: {
		flex: 0.5
	}
};
