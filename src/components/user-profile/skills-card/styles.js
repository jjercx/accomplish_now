import { StyleSheet } from 'react-native';

import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	contentWrapper: {
		marginTop: responsiveSize( 20 )
	},
	itemWrapper: {
		paddingVertical: responsiveSize( 10 ),
		paddingLeft: responsiveSize( 15 ),
		paddingRight: responsiveSize( 25 ),
		backgroundColor: colors.tangerine,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 100
	},
	textWrapper: {
		flex: 1,
		paddingHorizontal: responsiveSize( 10 )
	},
	buttonAdd: {
		marginTop: responsiveSize( 25 ),
		marginBottom: 0
	}
} );

export default styles;
