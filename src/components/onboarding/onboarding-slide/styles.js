import { responsiveSize } from '../../../utils/dimensions';
import spacings from '../../spacing/styles';

export default {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	wrapperOnboarding: {
		bottom: responsiveSize( 200 ),
		position: 'absolute',
		alignItems: 'center',
		marginHorizontal: responsiveSize( spacings.medium )
	},
	wrapperSubTitle: {
		height: responsiveSize( 150 )
	}
};
