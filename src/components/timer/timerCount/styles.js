import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		width: '100%',
		height: responsiveSize( 100 ),
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		width: '100%',
		height: responsiveSize( 15 )
	},
	count: {
		flex: 1,
		flexDirection: 'row'
	},
	hourContainer: {
		flex: 1
	}
} );
