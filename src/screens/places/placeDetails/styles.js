import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: Colors.paleGreyThree
	},
	imageContainer: {
		height: hp( HTP( 280 ) ),
		width: '100%'
	},
	placeImage: {
		flex: 1
	},
	shadowStatusBar: {
		backgroundColor: '#00000080',
		height: hp( HTP( 18 ) ),
		width: '100%',
		position: 'absolute',
		zIndex: 50
	},
	headerIconsContainer: {
		width: '100%',
		top: hp( HTP( 18 ) ),
		height: hp( HTP( 50 ) ),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	content: {
		flex: 1,
		paddingTop: hp( HTP( 15 ) ),
		paddingBottom: hp( HTP( 15 ) ),
		paddingLeft: wp( WTP( 15 ) ),
		paddingRight: wp( WTP( 15 ) )
	},
	placeLocationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: hp( HTP( 15 ) ),
		marginTop: hp( HTP( 3 ) )
	},
	placeLocationIcon: {
		height: hp( HTP( 20 ) ),
		width: wp( WTP( 20 ) ),
		marginRight: wp( WTP( 5 ) )
	},
	card: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		width: '100%',
		marginBottom: hp( HTP( 10 ) ),
		paddingTop: hp( HTP( 13 ) ),
		paddingBottom: hp( HTP( 13 ) ),
		paddingLeft: wp( WTP( 20 ) ),
		paddingRight: wp( WTP( 20 ) )
	},
	cardHeader: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageCardHeader: {
		marginRight: wp( WTP( 20 ) )
	},
	cardContent: {
		paddingTop: hp( HTP( 15 ) ),
		paddingBottom: hp( HTP( 10 ) )
	},
	openingHoursCardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	locationCardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	locationSideLeft: {
		flex: 0.6
	},
	locationSideRight: {
		flex: 0.45,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	button: {
		backgroundColor: Colors.skyBlue,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 10 ) ),
		paddingLeft: wp( WTP( 15 ) ),
		paddingRight: wp( WTP( 15 ) )
	},
	amenitiesCardContent: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	amenity: {
		backgroundColor: Colors.paleGreyFour,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: hp( HTP( 5 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 13 ) ),
		paddingRight: wp( WTP( 13 ) ),
		marginRight: wp( WTP( 6 ) ),
		marginLeft: wp( WTP( 6 ) ),
		marginTop: hp( HTP( 5 ) ),
		marginBottom: hp( HTP( 5 ) )
	}
} );
