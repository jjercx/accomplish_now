import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputSearch: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: responsiveSize( 12 ),
		marginHorizontal: responsiveSize( 5 ),
		marginVertical: responsiveSize( 5 ),
		backgroundColor: Colors.paleGreyFour,
		borderRadius: 100,
		height: responsiveSize( 40 )
	},
	textInput: {
		flex: 1,
		height: '100%',
		paddingHorizontal: responsiveSize( 10 )
	},
	iconSettingWrapper: {
		paddingVertical: responsiveSize( 15 ),
		marginLeft: responsiveSize( 5 ),
		position: 'relative'
	},
	headerButtonNotificationsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		position: 'relative'
	},
	notification: {
		backgroundColor: 'red',
		width: responsiveSize( 8 ),
		height: responsiveSize( 8 ),
		borderRadius: 999,
		position: 'absolute',
		top: responsiveSize( 10 ),
		right: responsiveSize( 11 )
	},
	searchIcon: {
		width: responsiveSize( 20 ),
		height: responsiveSize( 20 ),
		marginLeft: responsiveSize( 3 )
	},
	resetIcon: {
		width: '100%',
		height: '100%'
	},
	resetIconContainer: {
		width: responsiveSize( 20 ),
		height: responsiveSize( 20 )
	}
};
