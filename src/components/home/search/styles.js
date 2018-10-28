import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default {
	wrapperSearch: {
		position: 'absolute',
		marginTop: hpd( HTP( 145 ) ),
		alignItems: 'center',
		width: '100%'
	},
	inputSearch: {
		width: wpd( '90%' ),
		backgroundColor: colors.graySearchBar,
		height: hpd( HTP( 55 ) ),
		borderRadius: 10,
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
		width: wpd( WTP( 20 ) ),
		height: hpd( HTP( 20 ) ),
		marginLeft: wpd( WTP( 20 ) )
	},
	input: {
		width: wpd( '70%' ),
		marginLeft: wpd( WTP( 20 ) )
	}
};
