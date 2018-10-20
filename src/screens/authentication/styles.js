import Platform from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../theme/palette';
import { HTP, WTP } from '../../utils/dimensions';

export default {
	addPhotoButton: {
		width: wp( WTP( 87 ) ),
		height: hp( HTP( 87 ) ),
		borderRadius: hp( HTP( 87 ) ) / 2,
		alignSelf: 'center',
		marginBottom: 0,
		marginTop: hp( HTP( 11 ) )
	},
	container: {
		flex: 1
	},
	infoWrapper: {
		marginLeft: wp( WTP( 24 ) ),
		marginTop: hp( HTP( 20 ) ),
		marginRight: wp( WTP( 33 ) )
	},
	inputsContainer: {
		padding: hp( HTP( 24 ) )
	},
	inputWrapper: {
		height: hp( HTP( 52 ) ),
		borderWidth: 1,
		marginTop: hp( HTP( 25 ) ),
		marginBottom: hp( HTP( 40 ) ),
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: hp( HTP( 24 ) ),
		borderRadius: 3,
		borderColor: Colors.coolGrey
	},
	inputLeftContainer: {
		width: wp( WTP( 62 ) ),
		borderRightWidth: 1,
		height: hp( HTP( 52 ) ),
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
		marginBottom: hp( HTP( 36 ) )
	},
	inputTextHint: {
		marginRight: wp( WTP( 15 ) ),
		marginLeft: wp( WTP( 10 ) )
	},
	inputText: {
		fontSize: hp( HTP( 17 ) ),
		flex: 1,
		top: Platform === 'ios' ? 0 : hp( HTP( 1 ) )
	},
	SPInputSpace: {
		marginRight: wp( WTP( 20 ) )
	},
	SPButtonForward: {
		marginTop: hp( HTP( 30 ) )
	}
};
