import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	imgPlace: {
		width: wpd( WTP( 261 ) ),
		height: hpd( HTP( 256 ) )
	}
};
