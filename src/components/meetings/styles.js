import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Platform } from 'react-native';
import { HTP, WTP } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	meeting: {
		flex: 1,
		flexDirection: 'row',
		height: hp( HTP( 120 ) ),
		paddingTop: hp( HTP( 20 ) ),
		borderBottomWidth: 0.4,
		borderBottomColor: Colors.pinkishGrey,
		backgroundColor: Colors.white,
		borderRadius: Platform.OS === 'ios' ? 16 : 2,
		shadowRadius: 2,
		shadowOpacity: 0.4,
		shadowColor: 'rgba(0, 0, 0, 0.3)',
		shadowOffset: {
			width: 0,
			height: 3
		},
		marginBottom: hp( HTP( 15 ) )
	},
	imageUser: {
		width: wp( WTP( 65 ) ),
		height: hp( HTP( 65 ) ),
		flexShrink: 0,
		alignSelf: 'flex-end',
		marginLeft: wp( WTP( -35 ) ),
		marginTop: wp( WTP( -62 ) ),
		borderWidth: 2.5,
		borderRadius: 32.5,
		borderColor: Colors.white,
		resizeMode: 'cover',
		overflow: 'hidden'
	},
	imageUserRight: {
		width: wp( WTP( 60 ) ),
		height: hp( HTP( 60 ) ),
		flexShrink: 0
	},
	imageContainer: {
		paddingLeft: wp( WTP( 15 ) ),
		display: 'flex',
		flexDirection: 'column',
		width: wp( WTP( 115 ) )
	},
	bottomStatus: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		width: wp( WTP( 125 ) ),
		marginTop: wp( WTP( 5 ) )
	},
	dataContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: hp( HTP( 5 ) )
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
		marginTop: hp( HTP( 20 ) ),
		marginRight: wp( WTP( 15 ) )
	}
};
