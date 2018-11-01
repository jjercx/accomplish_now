import {
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { HTP } from '../../utils/dimensions';

export default {
	container: {
		flex: 1
	},
	buttonForward: {
		marginTop: hp( HTP( 15 ) ),
		marginBottom: hp( HTP( 15 ) )
	}
};
