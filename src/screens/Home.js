import React, { Component } from 'react';
import {
	ImageBackground,
	View,
	Switch,
	StyleSheet
} from 'react-native';
import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import UserSection from '../components/home/header/UserSection';
import { HTP, WTP } from '../utils/dimensions';
import Typography from '../components/typography/Typography';
import Spacing from '../components/spacing/Spacing';
import colors from '../theme/palette';

const styles = StyleSheet.create( {
	imageBackground: {
		height: hpd( HTP( 193 ) ),
		width: '100%'
	},
	wrapperContainerAvailable: {
		flexDirection: 'row',
		width: '100%',
		position: 'absolute',
		top: hpd( '5%' )
	},
	wrapperAvailable: {
		flexDirection: 'row',
		marginLeft: wpd( WTP( -5 ) ),
		alignItems: 'center',
		width: '100%',
		justifyContent: 'flex-end'
	}
} );

const IM_AVAILABLE_TEXT = "I'm Available";

/* eslint-disable react/prefer-stateless-function */
class Home extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		available: false
	}

	_onValueChange( value ) {
		this.setState( { available: value } );
	}

	render() {
		const { available } = this.state;
		return (
			<ImageBackground
				source={require( '../assets/images/home/header.png' )}
				style={styles.imageBackground}
			>
				<UserSection userFirstName="Javier" meetings={12} />
				<View style={styles.wrapperContainerAvailable}>
					<View style={styles.wrapperAvailable}>
						<Typography variant="midTitle" color="white">{IM_AVAILABLE_TEXT}</Typography>
						<Spacing size="small" horizontal />
						<Switch
							onValueChange={value => this._onValueChange( value )}
							value={available}
							onTintColor={colors.orange}
							thumbTintColor={colors.switchThumbTintColor}
							tintColor={colors.switchTintColor}
							style={{ transform: [ { scaleX: 0.8 }, { scaleY: 0.8 } ] }}
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

export default Home;
