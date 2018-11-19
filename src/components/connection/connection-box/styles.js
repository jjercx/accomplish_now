import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';

export default {
	wrapperPerson: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	imgPerson: {
		width: wpd( WTP( 70 ) ),
		height: hpd( HTP( 70 ) ),
		borderRadius: 35
	}
};
