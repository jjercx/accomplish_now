import { Platform } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	card: {
		backgroundColor: Platform.OS === 'ios' ? Colors.paleGrey : Colors.paleGreyAndroid,
		marginBottom: hp( HTP( 14 ) ),
		marginLeft: wp( WTP( 13 ) ),
		marginRight: wp( WTP( 5 ) ),
		paddingTop: hp( HTP( 4 ) ),
		paddingBottom: hp( HTP( 4 ) ),
		paddingLeft: wp( WTP( 4 ) ),
		paddingRight: wp( WTP( 10 ) ),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 999,
		alignSelf: 'center',
		flexDirection: 'row'
	},
	text: {
		color: Colors.greyishBrown,
		marginLeft: wp( WTP( 8 ) ),
		marginRight: wp( WTP( 15 ) )
	},
	icon: {
		fontSize: hp( HTP( 13 ) ),
		color: Colors.paleGrey,
		margin: hp( HTP( 2 ) )
	},
	iconContainer: {
		backgroundColor: Colors.lightGreyBlue,
		borderRadius: 999
	}
};
