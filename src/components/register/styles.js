import { Platform } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

export default {
	titleWrapper: {
		marginLeft: responsiveSize( 24 ),
		marginTop: Platform.OS === 'ios' ? responsiveSize( 22 ) : 0
	}
};
