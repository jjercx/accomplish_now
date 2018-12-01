import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		flex: 1
	},
	circleContainer: {
		flex: 1,
		alignItems: 'center'
	},
	imageContainer: {
		width: responsiveSize( 100 ),
		height: responsiveSize( 100 )
	},
	timerCount: {
		width: '60%',
		marginTop: responsiveSize( 12 )
	},
	buttonContainer: {
		width: '100%',
		height: responsiveSize( 60 ),
		flexDirection: 'row',
		alignSelf: 'center'
	},
	buttonWrapper: {
		flex: 1,
		paddingVertical: responsiveSize( 6 ),
		justifyContent: 'center',
		alignItems: 'center'

	},
	buttonStyle: {
		flex: 1,
		width: '90%',
		height: '100%'

	}
} );
