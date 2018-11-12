import { Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WTP, HTP } from '../../utils/dimensions';

export default {
	titleWrapper: {
		marginLeft: wp( WTP( 24 ) ),
		marginTop: Platform.OS === 'ios' ? hp( HTP( 22 ) ) : 0
	}
};
