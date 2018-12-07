import { Platform } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default {
	card: {
		backgroundColor: Platform.OS === 'ios' ? Colors.paleGrey : Colors.paleGreyAndroid,
		marginBottom: responsiveSize( 14 ),
		marginRight: responsiveSize( 8 ),
		paddingTop: responsiveSize( 4 ),
		paddingBottom: responsiveSize( 4 ),
		paddingLeft: responsiveSize( 4 ),
		paddingRight: responsiveSize( 10 ),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 999,
		alignSelf: 'center',
		flexDirection: 'row'
	},
	cardSelected: {
		backgroundColor: Colors.darkSkyBlue
	},
	largeCard: {
		paddingRight: responsiveSize( 34 )
	},
	text: {
		color: Colors.greyishBrown,
		fontSize: responsiveSize( 15 ),
		marginLeft: responsiveSize( 8 ),
		marginRight: responsiveSize( 15 )
	},
	textOnCardSelected: {
		color: Colors.white
	},
	icon: {
		fontSize: responsiveSize( 13 ),
		color: Colors.paleGrey,
		margin: responsiveSize( 2 )
	},
	iconCheck: {
		fontSize: responsiveSize( 20 ),
		color: Colors.white,
		margin: responsiveSize( 2 )
	},
	iconContainer: {
		backgroundColor: Colors.lightGreyBlue,
		borderRadius: 999
	}
};
