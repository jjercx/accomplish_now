import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperConnections: {
		marginLeft: hpd( HTP( 32 ) ),
		top: hpd( HTP( 52 ) )
	},
	searchPerson: {
		width: wpd( WTP( 20 ) ),
		height: hpd( HTP( 20 ) ),
		marginLeft: wpd( WTP( 20 ) )
	},
	containerLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: wpd( WTP( 60 ) ),
		marginBottom: wpd( WTP( 20 ) ),
		height: hpd( HTP( 50 ) )
	}
};
