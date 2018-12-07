import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1
	},
	shadowStatusBar: {
		backgroundColor: '#ffffff90',
		height: responsiveSize( 18 ),
		width: '100%',
		position: 'absolute',
		zIndex: 50
	},
	scrollView: {
		padding: responsiveSize( 20 ),
		alignItems: 'center',
		width: '100%'
	},
	iconContainer: {
		alignItems: 'center',
		marginTop: responsiveSize( 20 )
	},
	icon: {},
	titleContainer: {
	},
	starsContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	star: {
		fontSize: responsiveSize( 45 )
	},
	starOn: {
		color: colors.darkSkyBlue
	},
	starOff: {
		color: colors.lightPeriwinkle
	},
	imageProfile: {
		width: responsiveSize( 40 ),
		height: responsiveSize( 40 ),
		marginRight: responsiveSize( 10 )
	},
	textContainer: {
		paddingHorizontal: responsiveSize( 20 )
	},
	profileContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	skillsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	infoText: {
		textAlign: 'justify'
	},
	separator: {
		height: responsiveSize( 20 )
	},
	verticalSeparator: {
		width: responsiveSize( 20 )
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonStyle: {
		height: responsiveSize( 50 ),
		flex: 1
	}
} );
