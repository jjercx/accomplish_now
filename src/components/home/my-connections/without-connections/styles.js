import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchPerson: {
		width: wpd( WTP( 20 ) ),
		height: hpd( HTP( 20 ) ),
		marginLeft: wpd( WTP( 20 ) )
	},
	containerLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: wpd( WTP( 40 ) ),
		marginBottom: wpd( WTP( 20 ) ),
		height: hpd( HTP( 50 ) )
	}
};
