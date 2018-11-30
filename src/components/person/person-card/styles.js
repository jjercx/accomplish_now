import { StyleSheet } from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		marginHorizontal: wpd( WTP( 3 ) ),
		marginVertical: wpd( WTP( 3 ) ),
		paddingVertical: hpd( HTP( 10 ) ),
		paddingHorizontal: wpd( WTP( 10 ) ),
		backgroundColor: colors.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: '48%'
	},
	cardContainerFullWidth: {
		width: '98%'
	},
	distanceWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
		height: hpd( HTP( 20 ) )
	},
	avatarWrapper: {
		marginTop: hpd( HTP( 20 ) ),
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
		minWidth: wpd( WTP( 150 ) )
	},
	ratingWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: wpd( WTP( 5 ) )
	},
	meetingsCountWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: wpd( WTP( 5 ) )
	},
	skillsWrapper: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: hpd( HTP( 20 ) ),
		marginBottom: hpd( HTP( 10 ) )
	},
	fewSkillsWrapper: {
		flexWrap: 'nowrap',
		justifyContent: 'center'
	},
	skill: {
		flex: -1,
		backgroundColor: colors.sliderCircles,
		borderRadius: 100,
		marginHorizontal: wpd( WTP( 5 ) ),
		paddingVertical: hpd( HTP( 5 ) ),
		paddingHorizontal: wpd( WTP( 8 ) )
	},
	avatar: {
		width: wpd( WTP( 100 ) ),
		height: hpd( HTP( 100 ) ),
		borderRadius: 50
	},
	icon: {
		marginRight: wpd( WTP( 5 ) )
	}
} );

export default styles;
