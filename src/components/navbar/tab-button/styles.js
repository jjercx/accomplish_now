import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	imgTab: {
		width: wpd( WTP( 25 ) ),
		height: hpd( HTP( 25 ) )
	},
	tab: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: hpd( HTP( 70 ) ),
		width: wpd( WTP( 90 ) )
	}
};
