import { StyleSheet } from 'react-native';


import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	container: {
		marginHorizontal: responsiveSize( 20 ),
		paddingVertical: responsiveSize( 20 ),
		paddingHorizontal: responsiveSize( 25 ),
		backgroundColor: colors.white,
		borderRadius: 10
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	icon: {
		marginRight: responsiveSize( 20 )
	}
} );

export default styles;
