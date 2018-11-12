import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../../utils/dimensions';

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
		paddingTop: hp( HTP( 10 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 5 ) ),
		paddingRight: wp( WTP( 10 ) )
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
	logo: {
		width: wp( WTP( 18 ) ),
		height: hp( HTP( 18 ) )
	}
};
