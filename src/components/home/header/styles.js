import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightToPercent } from '../../../utils/dimensions';

export default {
	imageBackground: {
		height: hp( heightToPercent( 193 ) ),
		width: '100%'
	}
};
