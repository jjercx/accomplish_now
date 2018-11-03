import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../theme/palette';
import { HTP, WTP } from '../../utils/dimensions';

export default {
	button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonForwardContainer: {
		width: wp( WTP( 60 ) ),
		height: hp( HTP( 60 ) ),
		borderRadius: hp( HTP( 60 ) ) / 2,
		backgroundColor: Colors.macaroneAndCheese,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
		alignSelf: 'center',
		marginTop: hp( HTP( 60 ) )
	},
	icon: {
		fontSize: hp( HTP( 25 ) ),
		color: 'black',
		margin: hp( HTP( 8 ) )
	},
	label: {
		textAlign: 'center',
		fontSize: hp( HTP( 15 ) ),
		fontWeight: '400'
	},
	buttonBack: {
		top: '5%'
	}
};
