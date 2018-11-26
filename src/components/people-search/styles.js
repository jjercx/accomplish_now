import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { WTP, HTP } from '../../utils/dimensions';
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
		paddingHorizontal: wp( WTP( 12 ) ),
		marginHorizontal: wp( WTP( 5 ) ),
		marginVertical: hp( HTP( 5 ) ),
		backgroundColor: Colors.paleGreyFour,
		borderRadius: 100,
		height: hp( HTP( 40 ) )
	},
	textInput: {
		flex: 1,
		height: '100%',
		paddingHorizontal: wp( WTP( 10 ) )
	},
	iconSettingWrapper: {
		paddingVertical: hp( HTP( 15 ) ),
		marginLeft: wp( WTP( 5 ) ),
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
		width: wp( WTP( 8 ) ),
		height: hp( HTP( 8 ) ),
		borderRadius: 999,
		position: 'absolute',
		top: hp( HTP( 10 ) ),
		right: wp( WTP( 11 ) )
	},
	searchIcon: {
		width: wp( WTP( 20 ) ),
		height: hp( HTP( 20 ) ),
		marginLeft: wp( WTP( 3 ) )
	},
	resetIcon: {
		width: '100%',
		height: '100%'
	},
	resetIconContainer: {
		width: wp( WTP( 20 ) ),
		height: hp( HTP( 20 ) )
	}
};
