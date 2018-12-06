import fonts from '../../theme/fonts';
import { responsiveSize } from '../../utils/dimensions';

export default {
	input: {
		fontSize: responsiveSize( 17 ),
		fontFamily: fonts.productSansRegular,
		height: responsiveSize( 35 ),
		paddingBottom: 0,
		paddingLeft: 0,
		paddingTop: 0
	},
	label: {
		fontSize: responsiveSize( 16 ),
		fontFamily: fonts.productSansRegular
	},
	icon: {
		fontSize: responsiveSize( 25 ),
		color: 'black',
		margin: responsiveSize( 5 )
	},
	textInputContainer: {
		flexDirection: 'row'
	},
	errorText: {
		fontSize: responsiveSize( 10 )
	}
};
