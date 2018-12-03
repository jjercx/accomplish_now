import { Platform, StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1,
		marginTop: responsiveSize( Platform.OS === 'ios' ? 20 : 0 )
	},
	headerContainer: {
		flexDirection: 'row'
	},
	icon: {
		width: responsiveSize( 90 ),
		height: responsiveSize( 90 ),
		borderWidth: 0
	},
	iconContainer: {
	    alignItems: 'center'
	},
	titleContainer: {
	    marginTop: responsiveSize( 20 ),
		marginBottom: responsiveSize( 30 )
	},
	innerContainer: {
		borderBottomWidth: 1,
		borderColor: 'rgb(219, 219, 219)'
	},
	rowContainer: {
		borderBottomWidth: 1,
		borderColor: 'rgb(219, 219, 219)'
	},
	innerRow: {
		height: responsiveSize( 60 ),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: responsiveSize( 30 ),
		marginRight: responsiveSize( 40 )
	},
	imageContainer: {
		borderWidth: 0,
		height: responsiveSize( 40 ),
		width: responsiveSize( 70 ),
		justifyContent: 'center'
	},
	image: {
		width: responsiveSize( 40 ),
		height: responsiveSize( 40 )
	},
	imageOver: {
		position: 'absolute',
		left: responsiveSize( 28 )
	},
	circle: {
		width: responsiveSize( 30 ),
		height: responsiveSize( 30 )
	},
	switchContainer: {
		borderWidth: 0
	},
	buttonContainer: {
		marginHorizontal: responsiveSize( 30 ),
		marginVertical: responsiveSize( 15 )
	},
	button: {
		height: responsiveSize( 50 )
	},
	paidMain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: responsiveSize( 10 ),
		marginHorizontal: responsiveSize( 60 )
	},
	freeMain: {},
	paidCount: {
		marginVertical: responsiveSize( 20 )
	},
	paidCountConatiner: {
		marginHorizontal: responsiveSize( 10 )
	},
	bottomContainer: {
		marginVertical: responsiveSize( 10 )
	},
	addressForm: {
		marginVertical: responsiveSize( 40 ),
		marginHorizontal: responsiveSize( 30 )
	},
	addressInput: {
		borderWidth: 0,
		height: responsiveSize( 50 ),
		fontSize: responsiveSize( 25 )
	},
	addressInputContainer: {
		borderBottomWidth: 1,
		borderColor: Colors.pinkishGrey
	},
	addressButtonContainer: {
		borderWidth: 0,
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginVertical: responsiveSize( 20 )
	},
	addressButton: {
		borderWidth: 0,
		width: responsiveSize( 65 ),
		height: responsiveSize( 65 )
	},
	freeCount: {
		marginTop: 10
	}
} );
