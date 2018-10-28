import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { WTP } from '../../../utils/dimensions';
import spacings from '../../spacing/styles';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	wrapperOnboarding: {
		bottom: hpd( '25%' ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: wpd( WTP( spacings.medium ) )
	},
	wrapperSubTitle: {
		height: hpd( '15%' )
	}
};
