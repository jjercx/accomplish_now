import { StyleSheet } from 'react-native';
import { normalizeHP } from '../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		flex: 1
	},
	circleContainer: {
		flex: 1,
		alignItems: 'center'
	},
	imageContainer: {
		width: normalizeHP( 15 ),
		height: normalizeHP( 15 )
	},
	timerCount: {
		width: '60%',
		marginTop: normalizeHP( 2 )
	},
	buttonContainer: {
		width: '100%',
		height: normalizeHP( 10 ),
		flexDirection: 'row',
		alignSelf: 'center'
	},
	buttonWrapper: {
		flex: 1,
		paddingVertical: normalizeHP( 1 ),
		justifyContent: 'center',
		alignItems: 'center'

	},
	buttonStyle: {
		flex: 1,
		width: '90%',
		height: '100%'

	}
} );
