import { StyleSheet, Platform } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/palette';

export default StyleSheet.create( {
	container: {
		flex: 1
	},
	header: {},
	profileImagesContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	imageProfile: {
		width: responsiveSize( 40 ),
		height: responsiveSize( 40 )
	},
	section: {
		borderTopWidth: 0.5,
		borderTopColor: colors.brownGrey,
		padding: responsiveSize( 15 ),
		paddingLeft: responsiveSize( 30 ),
		alignItems: 'flex-start'
	},
	line: {
		borderTopWidth: 0.5,
		borderTopColor: colors.brownGrey
	},
	starsContainer: {
		flexDirection: 'row'
	},
	star: {
		fontSize: responsiveSize( 30 )
	},
	starOn: {
		color: colors.darkSkyBlue
	},
	starOff: {
		color: colors.lightPeriwinkle
	},
	infoText: {
		padding: responsiveSize( 15 )
	},
	buttonContainer: {
		padding: responsiveSize( 15 )
	},
	separator: {
		height: responsiveSize( 20 )
	},
	mediumSeparator: {
		height: responsiveSize( 10 )
	},
	verticalSeparator: {
		width: responsiveSize( 20 )
	},
	shadowStatusBar: {
		backgroundColor: '#ffffff90',
		height: responsiveSize( 18 ),
		width: '100%',
		position: 'absolute',
		zIndex: 50
	},
	arrowBackContainer: {
		marginTop: Platform.OS === 'ios' ? responsiveSize( 25 ) : 0,
		paddingLeft: responsiveSize( 5 )
	},
	arrowBack: {
		fontSize: responsiveSize( 25 ),
		color: colors.charcoalGrey,
		margin: responsiveSize( 8 )
	}
} );
