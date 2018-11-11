import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	textWrapper: {
		marginVertical: hpd( HTP( 15 ) )
	},
	buttonEdit: {
		zIndex: 2,
		position: 'absolute',
		top: hpd( HTP( 20 ) ),
		right: wpd( WTP( 20 ) )
	}
} );

export default styles;
