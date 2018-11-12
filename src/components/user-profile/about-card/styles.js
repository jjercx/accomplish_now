import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';

const styles = StyleSheet.create( {
	titleWrapper: {
		marginTop: hpd( HTP( 20 ) )
	},
	textWrapper: {
		marginTop: hpd( HTP( 5 ) )
	},
	contentWrapper: {
		marginBottom: hpd( HTP( 10 ) )
	},
	buttonEdit: {
		zIndex: 2,
		position: 'absolute',
		top: hpd( HTP( 20 ) ),
		right: wpd( WTP( 20 ) )
	}
} );

export default styles;
