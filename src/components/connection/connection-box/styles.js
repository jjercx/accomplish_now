import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	imgPerson: {
		width: wpd( WTP( 75 ) ),
		height: hpd( HTP( 75 ) )
	}
};
