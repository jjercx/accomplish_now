import { Platform } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default {
	navBarOpenContainer: {
		width: '100%',
		height: '100%',
		zIndex: 2,
		backgroundColor: Platform.OS === 'android' ? '#00000050' : null
	},
	navBarOpen: {
		width: '99%',
		height: responsiveSize( 200 ),
		backgroundColor: colors.white,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
		zIndex: 2
	},
	wrapperMenuButtonsRow1: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
};
