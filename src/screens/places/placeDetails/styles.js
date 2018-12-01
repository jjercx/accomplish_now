import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: Colors.paleGreyThree
	},
	imageContainer: {
		height: responsiveSize( 280 ),
		width: '100%'
	},
	placeImage: {
		flex: 1
	},
	shadowStatusBar: {
		backgroundColor: '#00000080',
		height: responsiveSize( 18 ),
		width: '100%',
		position: 'absolute',
		zIndex: 50
	},
	headerIconsContainer: {
		width: '100%',
		top: responsiveSize( 18 ),
		height: responsiveSize( 50 ),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	content: {
		flex: 1,
		paddingTop: responsiveSize( 15 ),
		paddingBottom: responsiveSize( 15 ),
		paddingLeft: responsiveSize( 15 ),
		paddingRight: responsiveSize( 15 )
	},
	placeLocationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: responsiveSize( 15 ),
		marginTop: responsiveSize( 3 )
	},
	placeLocationIcon: {
		height: responsiveSize( 20 ),
		width: responsiveSize( 20 ),
		marginRight: responsiveSize( 5 )
	},
	card: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		width: '100%',
		marginBottom: responsiveSize( 10 ),
		paddingTop: responsiveSize( 13 ),
		paddingBottom: responsiveSize( 13 ),
		paddingLeft: responsiveSize( 20 ),
		paddingRight: responsiveSize( 20 )
	},
	cardHeader: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageCardHeader: {
		marginRight: responsiveSize( 20 )
	},
	cardContent: {
		paddingTop: responsiveSize( 15 ),
		paddingBottom: responsiveSize( 10 )
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
		paddingTop: responsiveSize( 10 ),
		paddingBottom: responsiveSize( 10 ),
		paddingLeft: responsiveSize( 15 ),
		paddingRight: responsiveSize( 15 )
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
		paddingTop: responsiveSize( 5 ),
		paddingBottom: responsiveSize( 5 ),
		paddingLeft: responsiveSize( 13 ),
		paddingRight: responsiveSize( 13 ),
		marginRight: responsiveSize( 6 ),
		marginLeft: responsiveSize( 6 ),
		marginTop: responsiveSize( 5 ),
		marginBottom: responsiveSize( 5 )
	}
} );
