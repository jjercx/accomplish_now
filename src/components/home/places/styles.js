import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center'
	},
	containerPlacesDetailActive: {
		top: -40
	},
	wrapperPlaces: {
		marginLeft: hpd( HTP( 32 ) ),
		top: hpd( HTP( 50 ) )
	},
	wrapperPlacesPlacesDetailActive: {
		marginLeft: 15
	}
};
