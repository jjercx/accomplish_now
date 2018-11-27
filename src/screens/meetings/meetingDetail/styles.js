import { StyleSheet } from 'react-native';
import Colors from '../../../theme/palette';
import { normalizeHP, normalizeWP } from '../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		flex: 1,
		paddingTop: normalizeHP( 2 ),
		paddingHorizontal: normalizeWP( 2 ),
		backgroundColor: Colors.darkSkyBlue
	},
	meetingContaienr: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: normalizeHP( 2.5 ),
		paddingVertical: normalizeHP( 1 ),
		marginBottom: normalizeHP( 2 )
	},
	meetingWrapper: {
		flex: 1,
		paddingTop: normalizeHP( 7 )
	},
	imageContainer: {
		width: '35%',
		alignSelf: 'center',
		height: normalizeHP( 7.5 ),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'

	},
	imageProfile: {
		width: normalizeHP( 7 ),
		height: normalizeHP( 7 ),
		borderRadius: normalizeHP( 7 ) / 2
	},
	timerContainer: {
		flex: 1,
		paddingTop: normalizeHP( 1 )
	}
} );
