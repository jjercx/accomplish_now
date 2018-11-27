import { StyleSheet } from 'react-native';
import colors from '../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.modalBackgroundColor
	},
	topContainer: {
		flex: 1,
		justifyContent: 'space-between'
	}
} );
