import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	imageBackground: {
		height: hpd( HTP( 193 ) ),
		width: '100%'
	},
	wrapperUserInfo: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		flex: 1,
		marginLeft: wpd( WTP( 22 ) )
	}
};
