import { StyleSheet } from 'react-native';
import colors from '../../theme/palette';
import { normalizeHP, normalizeWP } from '../../utils/dimensions';

export default StyleSheet.create( {
	card: {
		backgroundColor: 'white',
		borderRadius: normalizeHP( 1.5 ),
		paddingTop: normalizeHP( 7 ),
		marginHorizontal: normalizeWP( 4 )

	},
	cardWrapper: {
		paddingHorizontal: normalizeHP( 10 )
	},
	imageWrapper: {
		width: normalizeHP( 7 ),
		height: normalizeHP( 7 ),
		alignSelf: 'center',
		marginBottom: normalizeHP( 1.5 )
	},
	imageStyle: {
		width: '100%',
		height: '100%'
	},
	title: {
		marginBottom: normalizeHP( 1.5 )
	},
	message: {
		marginBottom: normalizeHP( 10 )
	},
	actionButton: {
		width: '100%',
		height: normalizeHP( 8 ),
		flexDirection: 'row',
		backgroundColor: colors.modalLineColor,
		borderBottomLeftRadius: normalizeHP( 1.5 ),
		borderBottomRightRadius: normalizeHP( 1.5 ),
		paddingTop: 1,
		justifyContent: 'space-between'
	},
	buttonWrapper: {
		width: '49.9%',
		height: '100%',
		backgroundColor: 'white'
	},
	buttonBorderBottomLeftRadius: {
		borderBottomLeftRadius: normalizeHP( 1.5 )
	},
	buttonBorderBottomRightRadius: {
		borderBottomRightRadius: normalizeHP( 1.5 )
	}
} );
