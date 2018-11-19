import { StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { WTP } from '../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		marginLeft: wp( WTP( 15 ) )
	}
} );
