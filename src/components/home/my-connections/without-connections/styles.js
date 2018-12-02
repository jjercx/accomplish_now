import { responsiveSize } from '../../../../utils/dimensions';

export default {
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchPerson: {
		width: responsiveSize( 20 ),
		height: responsiveSize( 20 ),
		marginLeft: responsiveSize( 20 )
	},
	containerLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: responsiveSize( 40 ),
		marginBottom: responsiveSize( 20 ),
		height: responsiveSize( 50 )
	}
};
