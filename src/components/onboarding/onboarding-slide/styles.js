import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import spacings from '../../spacing/styles';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: 192,
		height: 105
	},
	wrapperOnboarding: {
		bottom: hp( '5%' ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: spacings.medium
	},
	wrapperButtons: {
		flexDirection: 'row'
	},
	wrapperSubTitle: {
		height: 55
	},
	wrapperButton: {
		flex: 0.5
	}
};
