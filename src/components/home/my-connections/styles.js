import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

export default {
	wrapperTitle: {
		flexDirection: 'row',
		height: hpd( HTP( 35 ) ),
		top: hpd( HTP( 43 ) )
	},
	wrapperMyConnections: {
		flex: 0.73,
		justifyContent: 'center'
	},
	wrapperSeeAll: {
		flex: 0.2,
		justifyContent: 'center'
	},
	wrapperConnections: {
		marginLeft: hpd( HTP( 32 ) ),
		top: hpd( HTP( 52 ) )
	}
};
