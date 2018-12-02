import { responsiveSize } from '../../../utils/dimensions';
import Colors from '../../../theme/palette';

export default {
	card: {
		paddingTop: responsiveSize( 10 ),
		paddingBottom: responsiveSize( 8 ),
		paddingLeft: responsiveSize( 10 ),
		paddingRight: responsiveSize( 10 ),
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: Colors.pinkishGreyTwo,
		backgroundColor: Colors.paleGreyTwo
	},
	text: {
		color: Colors.greyishBrown,
		marginLeft: responsiveSize( 8 ),
		marginRight: responsiveSize( 15 ),
		flex: 1
	},
	addButton: {
		borderRadius: 999,
		borderWidth: 1,
		borderColor: Colors.pinkishGreyTwo,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: responsiveSize( 4 ),
		paddingBottom: responsiveSize( 4 ),
		paddingLeft: responsiveSize( 15 ),
		paddingRight: responsiveSize( 15 )
	},
	addText: {
		color: Colors.pinkishGreyTwo,
		fontSize: responsiveSize( 11 )
	}
};
