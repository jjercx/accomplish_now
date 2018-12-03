import { StyleSheet } from 'react-native';
import Colors from '../../../theme/palette';
import { responsiveSize } from '../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		flex: 1,
		paddingTop: responsiveSize( 12 ),
		paddingHorizontal: responsiveSize( 12 ),
		backgroundColor: Colors.darkSkyBlue
	},
	meetingContaienr: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: responsiveSize( 20 ),
		paddingVertical: responsiveSize( 7 ),
		marginBottom: responsiveSize( 12 )
	},
	meetingWrapper: {
		flex: 1,
		paddingTop: responsiveSize( 44 )
	},
	imageContainer: {
		width: '35%',
		alignSelf: 'center',
		height: responsiveSize( 50 ),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'

	},
	imageProfile: {
		width: responsiveSize( 40 ),
		height: responsiveSize( 40 ),
		borderRadius: responsiveSize( 40 ) / 2
	},
	timerContainer: {
		flex: 1,
		paddingTop: responsiveSize( 7 )
	}
} );
