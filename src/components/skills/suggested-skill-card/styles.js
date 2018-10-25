import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default {
	card: {
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 8 ) ),
		paddingLeft: wp( WTP( 10 ) ),
		paddingRight: wp( WTP( 10 ) ),
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: Colors.pinkishGreyTwo,
		backgroundColor: Colors.paleGreyTwo
	},
	text: {
		color: Colors.greyishBrown,
		marginLeft: wp( WTP( 8 ) ),
		marginRight: wp( WTP( 15 ) ),
		flex: 1
	},
	addButton: {
		borderRadius: 999,
		borderWidth: 1,
		borderColor: Colors.pinkishGreyTwo,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: hp( HTP( 4 ) ),
		paddingBottom: hp( HTP( 4 ) ),
		paddingLeft: wp( WTP( 15 ) ),
		paddingRight: wp( WTP( 15 ) )
	},
	addText: {
		color: Colors.pinkishGreyTwo,
		fontSize: hp( HTP( 11 ) )
	}
};
