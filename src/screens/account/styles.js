import Platform from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../theme/palette';
import { heightToPercent, widhtToPercent } from '../../utils/dimensions';

export default {
	addPhotoButton: {
		width: wp( widhtToPercent( 87 ) ),
		height: hp( heightToPercent( 87 ) ),
		borderRadius: hp( heightToPercent( 87 ) ) / 2,
		backgroundColor: 'grey',
		alignSelf: 'center',
		marginBottom: 0,
		marginTop: hp( heightToPercent( 11 ) )
	},
	container: {
		flex: 1
	},
	infoWrapper: {
		marginLeft: wp( widhtToPercent( 24 ) ),
		marginTop: hp( heightToPercent( 20 ) ),
		marginRight: wp( widhtToPercent( 33 ) )
	},
	inputsContainer: {
		padding: hp( heightToPercent( 24 ) )
	},
	inputWrapper: {
		height: hp( heightToPercent( 52 ) ),
		borderWidth: 1,
		marginTop: hp( heightToPercent( 25 ) ),
		marginBottom: hp( heightToPercent( 40 ) ),
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: hp( heightToPercent( 24 ) ),
		borderRadius: 3,
		borderColor: Colors.coolGrey
	},
	inputLeftContainer: {
		width: wp( widhtToPercent( 62 ) ),
		borderRightWidth: 1,
		height: hp( heightToPercent( 52 ) ),
		justifyContent: 'center',
		borderColor: Colors.coolGrey
	},
	inputRightContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: hp( heightToPercent( 36 ) )
	},
	inputTextHint: {
		fontSize: hp( heightToPercent( 17 ) ),
		marginRight: wp( widhtToPercent( 21 ) ),
		marginLeft: wp( widhtToPercent( 10 ) )
	},
	inputText: {
		fontSize: hp( heightToPercent( 17 ) ),
		flex: 1,
		top: Platform === 'ios' ? 0 : hp( heightToPercent( 1 ) )
	},
	SPInputSpace: {
		marginRight: wp( widhtToPercent( 20 ) )
	},
	SPButtonForward: {
		marginTop: hp( heightToPercent( 30 ) )
	}
};
