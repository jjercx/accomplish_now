import { StyleSheet } from 'react-native';

export default StyleSheet.create( {
	container: {
		width: 80,
		height: 80,
		alignItems: 'center'
	},
	markerImage: {
		flex: 1
	},
	placeImage: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		position: 'absolute',
		marginTop: 10
	}
} );
