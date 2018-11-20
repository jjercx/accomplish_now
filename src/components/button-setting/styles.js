import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../utils/dimensions';

export default {
	buttonIconSettings: {
		marginRight: hp( HTP( 5 ) ),
		marginLeft: hp( HTP( 5 ) ),
		heigth: hp( HTP( 30 ) ),
		width: wp( WTP( 30 ) )
	}
};
