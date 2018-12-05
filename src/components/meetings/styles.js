import { Platform } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	meeting: {
		flex: 1,
		borderBottomWidth: 0.1,
		borderBottomColor: Colors.pinkishGrey,
		backgroundColor: Colors.white,
		borderRadius: Platform.OS === 'ios' ? 16 : 2,
		shadowRadius: 1.5,
		shadowOpacity: 0.1,
		shadowColor: 'rgba(0, 0, 0, 0.2)',
		shadowOffset: {
			width: 0,
			height: 2
		},
		marginBottom: responsiveSize( 15 ),
		paddingHorizontal: responsiveSize( 20 )
	},
	itemContainer: {
		flexDirection: 'row',
		height: responsiveSize( 120 ),
		paddingTop: responsiveSize( 20 ),
		paddingHorizontal: responsiveSize( 20 )
	},
	imageContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: responsiveSize( 115 )
	},
	imageUser: {
		width: responsiveSize( 65 ),
		height: responsiveSize( 65 ),
		flexShrink: 0,
		alignSelf: 'flex-end',
		marginLeft: responsiveSize( -35 ),
		marginTop: responsiveSize( -62 ),
		borderWidth: 2.5,
		borderRadius: responsiveSize( 32.5 ),
		borderColor: Colors.white,
		resizeMode: 'cover',
		overflow: 'hidden'
	},
	imageUserRight: {
		width: responsiveSize( 60 ),
		height: responsiveSize( 60 ),
		flexShrink: 0
	},
	bottomStatus: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		width: responsiveSize( 125 ),
		marginTop: responsiveSize( 5 )
	},
	dataContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: responsiveSize( 10 )
	},
	textAndNameContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-start'
	},
	hourTextContainer: {
		marginVertical: responsiveSize( 5 )
	},
	iconContainer: {
		marginTop: responsiveSize( 20 ),
		marginRight: responsiveSize( 15 )
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: responsiveSize( 10 )
	},
	buttonLeft: {
		flex: 1,
		marginRight: responsiveSize( 7 ),
		height: responsiveSize( 50 )
	},
	buttonRight: {
		flex: 1,
		marginLeft: responsiveSize( 8 ),
		height: responsiveSize( 50 )
	},
	buttonSettingContainer: {
		position: 'absolute',
		top: responsiveSize( 10 ),
		right: responsiveSize( 15 ) * -1
	},
	buttonSwipe: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: responsiveSize( 15 ),
		marginLeft: responsiveSize( 10 ),
		paddingHorizontal: responsiveSize( 15 ),
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0
	}
};
