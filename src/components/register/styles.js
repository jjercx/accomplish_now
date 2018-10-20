import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WTP, HTP } from '../../utils/dimensions';

export default {
	titleWrapper: {
		marginLeft: wp( WTP( 24 ) ),
		marginTop: hp( HTP( 22 ) )
	}
};
