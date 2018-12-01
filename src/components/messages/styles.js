import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	message: {
		flex: 1,
		flexDirection: 'row',
		height: responsiveSize( 90 ),
		paddingTop: responsiveSize( 15 ),
		paddingBottom: responsiveSize( 10 ),
		borderBottomWidth: 0.4,
		borderBottomColor: Colors.pinkishGrey
	},
	imageProfile: {
		width: responsiveSize( 50 ),
		height: responsiveSize( 50 ),
		borderRadius: responsiveSize( 50 ) / 2
	},
	imageContainer: {
		paddingRight: responsiveSize( 30 ),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	dataContainer: {
		flex: 1
	},
	dateContainerFather: {
		display: 'flex',
		alignItems: 'flex-end'
	},
	dateContainer: {
		marginRight: responsiveSize( 10 )
	},
	textButtonAndNameContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	textAndNameContainer: {
		flex: 1
	},
	iconContainer: {
		marginTop: responsiveSize( 5 )
	},

	// message received ─────────────────────────────────────────────────────────────────────────────

	mrContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingLeft: 17,
		paddingRight: 17,
		marginBottom: 10,
		alignItems: 'flex-start'
	},
	mrImageContainer: {
	},
	mrImage: {
	},
	mrTextContainer: {
		flex: 1,
		paddingLeft: 10,
		alignItems: 'flex-start'
	},
	mrTextBuble: {
		borderRadius: 13,
		backgroundColor: Colors.whiteThree,
		padding: 15
	},
	mrTextBubleTriangle: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderTopWidth: 15,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderTopColor: Colors.whiteThree
	},
	mrTimeAgo: {
		marginTop: 8,
		paddingLeft: 15
	},

	// message sended ─────────────────────────────────────────────────────────────────────────────

	msContainer: {
		flex: 1,
		alignItems: 'flex-end',
		paddingLeft: 17,
		paddingRight: 17,
		marginBottom: 10
	},
	msTextBuble: {
		borderRadius: 13,
		backgroundColor: Colors.electricBlue,
		padding: 15
	},
	msTimeAgo: {
		marginTop: 8,
		paddingRight: 15
	},

	// notifications ─────────────────────────────────────────────────────────────────────────────

	npContainer: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 0.8,
		borderBottomColor: Colors.whiteThree
	},
	npImageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15
	},
	npTextNotificationContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		marginRight: 20
	},
	npImage: {
		width: responsiveSize( 60 ),
		height: responsiveSize( 60 ),
		borderRadius: 30
	}
};
