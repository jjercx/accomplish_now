import { Platform } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	meeting: {
		flex: 1,
		flexDirection: 'row',
		height: responsiveSize( 120 ),
		paddingTop: responsiveSize( 20 ),
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
		marginBottom: responsiveSize( 15 )
	},
	imageUser: {
		width: responsiveSize( 65 ),
		height: responsiveSize( 65 ),
		flexShrink: 0,
		alignSelf: 'flex-end',
		marginLeft: responsiveSize( -35 ),
		marginTop: responsiveSize( -62 ),
		borderWidth: 2.5,
		borderRadius: 32.5,
		borderColor: Colors.white,
		resizeMode: 'cover',
		overflow: 'hidden'
	},
	imageUserRight: {
		width: responsiveSize( 60 ),
		height: responsiveSize( 60 ),
		flexShrink: 0
	},
	imageContainer: {
		paddingLeft: responsiveSize( 15 ),
		display: 'flex',
		flexDirection: 'column',
		width: responsiveSize( 115 )
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
		marginTop: responsiveSize( 5 )
	},
	textButtonAndNameContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'row'
	},
	textAndNameContainer: {
		flex: 1
	},
	iconContainer: {
		marginTop: responsiveSize( 20 ),
		marginRight: responsiveSize( 15 )
	}
};
