import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	widthImage: {
		width: wpd( WTP( 350 ) ),
		height: hpd( HTP( 215 ) ),
		borderRadius: 13
	}
};
