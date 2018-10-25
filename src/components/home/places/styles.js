import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center'
	},
	wrapperConnections: {
		marginLeft: hpd( HTP( 32 ) ),
		top: hpd( HTP( 52 ) )
	}
};
