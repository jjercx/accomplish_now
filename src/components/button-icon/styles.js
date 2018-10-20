import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../theme/palette';
import { heightToPercent, widhtToPercent } from '../../utils/dimensions';

export default {
	button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonForwardContainer: {
		width: wp( widhtToPercent( 60 ) ),
		height: hp( heightToPercent( 60 ) ),
		borderRadius: hp( heightToPercent( 60 ) ) / 2,
		backgroundColor: Colors.macaroneAndCheese,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
		alignSelf: 'center',
		marginTop: hp( heightToPercent( 60 ) )
	},
	icon: {
		fontSize: hp( heightToPercent( 25 ) ),
		color: 'black',
		margin: hp( heightToPercent( 8 ) )
	},
	label: {
		textAlign: 'center',
		fontSize: hp( heightToPercent( 15 ) ),
		fontWeight: '400'
	}
};
