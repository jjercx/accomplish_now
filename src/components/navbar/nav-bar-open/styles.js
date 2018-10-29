import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import colors from '../../../theme/palette';

export default {
	navBarOpen: {
		width: '99%',
		height: hpd( '33%' ),
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
