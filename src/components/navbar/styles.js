import { responsiveSize } from '../../utils/dimensions';

export default {
	container: {
		alignItems: 'center',
		width: '100%',
		height: '100%',
		position: 'absolute',
		bottom: 0
	},
	blur: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		elevation: 2,
		zIndex: 2,
		opacity: 0.98
	},
	containerClose: {
		alignItems: 'center',
		width: '100%',
		height: responsiveSize( 35 ),
		position: 'absolute',
		bottom: 0
	}
};
