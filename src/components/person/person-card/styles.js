import { StyleSheet } from 'react-native';

import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

const styles = StyleSheet.create( {
	cardContainer: {
		marginHorizontal: responsiveSize( 5 ),
		marginVertical: responsiveSize( 5 ),
		paddingVertical: responsiveSize( 10 ),
		paddingHorizontal: responsiveSize( 10 ),
		backgroundColor: colors.white,
		borderRadius: 5
	},
	distanceWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: responsiveSize( 20 )
	},
	avatarWrapper: {
		marginTop: responsiveSize( 20 ),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderRadius: 100
	},
	personInfoWrapper: {
		paddingVertical: responsiveSize( 15 )
	},
	statsWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		minWidth: responsiveSize( 150 )
	},
	ratingWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: responsiveSize( 5 )
	},
	meetingsCountWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: responsiveSize( 5 )
	},
	skillsWrapper: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: responsiveSize( 20 ),
		marginBottom: responsiveSize( 10 )
	},
	fewSkillsWrapper: {
		flexWrap: 'nowrap',
		justifyContent: 'center'
	},
	skill: {
		flex: -1,
		backgroundColor: colors.sliderCircles,
		borderRadius: 100,
		marginHorizontal: responsiveSize( 5 ),
		paddingVertical: responsiveSize( 5 ),
		paddingHorizontal: responsiveSize( 8 )
	},
	avatar: {
		width: responsiveSize( 100 ),
		height: responsiveSize( 100 ),
		borderRadius: 50
	},
	icon: {
		marginRight: responsiveSize( 5 )
	}
} );

export default styles;
