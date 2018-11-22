import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

export default {
	wrapperTitle: {
		flexDirection: 'row',
		height: hpd( HTP( 35 ) ),
		top: hpd( HTP( 35 ) ),
		width: '82%'
	},
	wrapperTitlePlacesDetailActive: {
		width: 'auto',
		left: -20
	},
	wrapperMyTitle: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	wrapperSeeAll: {
		flex: 0.2,
		justifyContent: 'center'
	}
};
