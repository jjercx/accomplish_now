import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	imageBackground: {
		height: responsiveSize( 132 ),
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingTop: responsiveSize( 20 )
	}
} );

export default styles;
