import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../../utils/dimensions';

export default StyleSheet.create( {
	container: {
		width: wp( WTP( 80 ) ),
		height: hp( HTP( 80 ) ),
		alignItems: 'center'
	},
	markerImage: {
		flex: 1
	},
	placeImage: {
		width: wp( WTP( 50 ) ),
		height: hp( HTP( 50 ) ),
		borderRadius: hp( HTP( 50 ) ) / 2,
		position: 'absolute',
		marginTop: hp( HTP( 10 ) )
	}
} );
