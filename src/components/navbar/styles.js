import colors from '../../theme/palette';

export default {
	container: {
		alignItems: 'center',
		width: '100%',
		height: '100%',
		position: 'absolute',
		bottom: 0
	},
	overlay: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		elevation: 1,
		zIndex: 1,
		backgroundColor: colors.black,
		opacity: 0.5
	},
	containerClose: {
		alignItems: 'center',
		width: '100%',
		height: 0,
		position: 'absolute',
		bottom: 0
	}
};
