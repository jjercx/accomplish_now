import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../utils/dimensions';

export default {
	buttonIconSettings: {
		marginRight: hp( HTP( 5 ) ),
		marginLeft: hp( HTP( 5 ) ),
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 5 ) ),
		paddingRight: wp( WTP( 10 ) )
	}
};
