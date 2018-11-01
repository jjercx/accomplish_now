import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../utils/dimensions';
import Colors from '../../theme/palette';

export default {
	message: {
		flex: 1,
		flexDirection: 'row',
		height: hp( HTP( 90 ) ),
		paddingTop: hp( HTP( 15 ) ),
		paddingBottom: hp( HTP( 10 ) ),
		borderBottomWidth: 0.4,
		borderBottomColor: Colors.pinkishGrey
	},
	imageProfile: {
		width: wp( WTP( 50 ) ),
		height: hp( HTP( 50 ) )
	},
	imageContainer: {
		paddingRight: wp( WTP( 30 ) ),
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
		marginRight: wp( WTP( 10 ) )
	},
	textButtonAndNameContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	textAndNameContainer: {
		flex: 1
	},
	iconContainer: {
		marginTop: hp( HTP( 5 ) )
	}
};
