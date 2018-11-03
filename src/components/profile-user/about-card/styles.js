import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	titleWrapper: {
		marginTop: hpd( HTP( 20 ) )
	},
	textWrapper: {
		marginTop: hpd( HTP( 5 ) )
	},
	contentWrapper: {
		marginBottom: hpd( HTP( 10 ) )
	}
} );

export default styles;
