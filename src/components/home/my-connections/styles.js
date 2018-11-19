import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperConnections: {
		paddingLeft: hpd( HTP( 32 ) ),
		top: hpd( HTP( 52 ) ),
		width: '100%'
	}
};
