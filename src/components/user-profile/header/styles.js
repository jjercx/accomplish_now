import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	imageBackground: {
		height: hpd( HTP( 132 ) ),
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingTop: hpd( HTP( 20 ) )
	}
} );

export default styles;
