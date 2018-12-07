import { StyleSheet } from 'react-native';
import colors from '../../theme/palette';
import { responsiveSize } from '../../utils/dimensions';

export default StyleSheet.create( {
	card: {
		backgroundColor: 'white',
		borderRadius: responsiveSize( 20 ),
		paddingTop: responsiveSize( 40 ),
		marginHorizontal: responsiveSize( 30 )

	},
	cardWrapper: {
		paddingHorizontal: responsiveSize( 80 )
	},
	imageWrapper: {
		width: responsiveSize( 40 ),
		height: responsiveSize( 40 ),
		alignSelf: 'center',
		marginBottom: responsiveSize( 20 )
	},
	imageStyle: {
		width: '100%',
		height: '100%'
	},
	title: {
		marginBottom: responsiveSize( 20 )
	},
	message: {
		marginBottom: responsiveSize( 15 )
	},
	actionButton: {
		width: '100%',
		height: responsiveSize( 50 ),
		flexDirection: 'row',
		backgroundColor: colors.brownGrey,
		borderBottomLeftRadius: responsiveSize( 20 ),
		borderBottomRightRadius: responsiveSize( 20 ),
		paddingTop: 1,
		justifyContent: 'space-between'
	},
	buttonWrapper: {
		width: '49.9%',
		height: '100%',
		backgroundColor: 'white'
	},
	buttonBorderBottomLeftRadius: {
		borderBottomLeftRadius: responsiveSize( 20 )
	},
	buttonBorderBottomRightRadius: {
		borderBottomRightRadius: responsiveSize( 20 )
	}
} );
