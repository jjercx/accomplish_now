import { responsiveSize } from '../../utils/dimensions';

export default {
	headerButtonsContainer: {
		flexDirection: 'row'
	},
	headerButtonAccomplishContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	buttonAccomplish: {
		paddingTop: responsiveSize( 10 ),
		paddingBottom: responsiveSize( 5 ),
		paddingLeft: responsiveSize( 5 ),
		paddingRight: responsiveSize( 10 )
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
	logo: {
		width: responsiveSize( 18 ),
		height: responsiveSize( 18 )
	}
};
