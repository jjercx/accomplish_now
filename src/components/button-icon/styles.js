import Colors from '../../theme/palette';
import {  responsiveSize } from '../../utils/dimensions';

export default {
	button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonForwardContainer: {
		width: responsiveSize( 60 ),
		height: responsiveSize( 60 ),
		borderRadius: responsiveSize( 60 ) / 2,
		backgroundColor: Colors.macaroneAndCheese,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
		alignSelf: 'center',
		marginTop: responsiveSize( 60 )
	},
	icon: {
		fontSize: responsiveSize( 25 ),
		color: 'black',
		margin: responsiveSize( 8 )
	},
	label: {
		textAlign: 'center',
		fontSize: responsiveSize( 15 ),
		fontWeight: '400'
	},
	iconEdit: {
		marginRight: responsiveSize( 8 )
	},
	buttonEdit: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	buttonAdd: {
		alignSelf: 'center',
		marginVertical: responsiveSize( 10 )
	}
};
