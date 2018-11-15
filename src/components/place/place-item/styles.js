import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP, iPhoneSE } from '../../../utils/dimensions';

export default {
	widthImage: {
		width: wpd( WTP( iPhoneSE() ? 300 : 350 ) ),
		height: hpd( HTP( 215 ) ),
		borderRadius: 13
	},
	widthAndroid: {
		width: wpd( WTP( 380 ) ),
		height: hpd( HTP( 215 ) ),
		borderRadius: 13
	},

	descriptionPlaces: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	sectionIcon: {
		marginLeft: 10,
		marginRight: 10
	}
};
