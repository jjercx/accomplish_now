import { StyleSheet } from 'react-native';
import { normalizeHP } from '../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		width: '100%',
		height: normalizeHP( 15 ),
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		width: '100%',
		height: normalizeHP( 2 )
	},
	count: {
		flex: 1,
		flexDirection: 'row'
	},
	hourContainer: {
		flex: 1
	}
} );
