import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	textWrapper: {
		marginVertical: hpd( HTP( 15 ) )
	}
} );

export default styles;
