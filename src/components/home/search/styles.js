import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default {
	wrapperSearch: {
		position: 'absolute',
		marginTop: responsiveSize( 145 ),
		alignItems: 'center',
		width: '100%'
	},
	inputSearch: {
		width: responsiveSize( 280 ),
		backgroundColor: colors.graySearchBar,
		height: responsiveSize( 55 ),
		borderRadius: responsiveSize( 10 ),
		shadowColor: colors.shadowGray,
		shadowOffset: {
			width: 2,
			height: 3
		},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		alignItems: 'center',
		flexDirection: 'row'
	},
	searchIcon: {
		width: responsiveSize( 20 ),
		height: responsiveSize( 20 ),
		marginLeft: responsiveSize( ( 20 ) )
	},
	input: {
		width: responsiveSize( 250 ),
		marginLeft: responsiveSize( 20 )
	}
};
