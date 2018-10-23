import { widthPercentageToDP as wpd } from 'react-native-responsive-screen';
import { WTP } from '../../../utils/dimensions';

export default {
	container: {
		flex: 1
	},
	wrapperUserInfo: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		flex: 1,
		marginLeft: wpd( WTP( 22 ) ),
		marginTop: 5
	}
};
