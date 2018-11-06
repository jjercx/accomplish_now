import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		width: wpd( WTP( 190 ) ),
		marginHorizontal: wpd( WTP( 5 ) ),
		paddingVertical: hpd( HTP( 10 ) ),
		paddingHorizontal: wpd( WTP( 10 ) ),
		backgroundColor: colors.white,
		borderRadius: 5
	},
	distanceWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	avatarWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderRadius: 100
	},
	personInfoWrapper: {
		paddingVertical: hpd( HTP( 15 ) )
	},
	statsWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		width: wpd( WTP( 170 ) )
	},
	ratingWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: wpd( WTP( 20 ) )
	},
	meetingsCountWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: wpd( WTP( 10 ) )
	},
	skillsWrapper: {
		marginTop: hpd( HTP( 20 ) ),
		marginBottom: hpd( HTP( 10 ) ),
		paddingHorizontal: wpd( WTP( 10 ) ),
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	skill: {
		backgroundColor: colors.sliderCircles,
		borderRadius: 100,
		paddingVertical: hpd( HTP( 5 ) ),
		paddingHorizontal: wpd( WTP( 10 ) ),
		flex: -1
	},
	avatar: {
		width: wpd( WTP( 100 ) ),
		height: hpd( HTP( 100 ) )
	},
	icon: {
		marginRight: wpd( WTP( 5 ) )
	}
} );

export default styles;
