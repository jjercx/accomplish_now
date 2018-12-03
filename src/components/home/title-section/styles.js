import { responsiveSize } from '../../../utils/dimensions';

export default {
	wrapperTitle: {
		flexDirection: 'row',
		height: responsiveSize( 35 ),
		top: responsiveSize( 35 ),
		width: '82%'
	},
	wrapperTitlePlacesDetailActive: {
		width: 'auto',
		left: -20
	},
	wrapperMyTitle: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	wrapperSeeAll: {
		flex: 0.2,
		justifyContent: 'center'
	}
};
