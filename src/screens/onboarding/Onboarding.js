import React, { Component } from 'react';
import {
	ImageBackground,
	Image,
	View
} from 'react-native';

import Spacing from '../../components/spacing/Spacing';
import Typography from '../../components/typography/Typography';
import SliderCircles from '../../components/slider/slider-circles/SliderCircles';
import Button from '../../components/button/Button';
import colors from '../../theme/palette';

const styles = {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: 192.3,
		height: 105.3
	},
	wrapperOnboarding: {
		top: '32%',
		alignItems: 'center',
		width: '84%'
	},
	wrapperButtons: {
		flexDirection: 'row'
	}
};

const TEXT_ONBOARDING1 = 'By continuing you are agreeing with our terms of service and privacy policy.';

/* eslint-disable react/prefer-stateless-function */
class Onboarding extends Component {
	render() {
		return (
			<ImageBackground
				source={require( '../../assets/images/onboardings/experts.png' )}
				style={styles.imageBackground}
			>
				<Spacing size="xLarge" />
				<Image
					style={styles.logo}
					source={require( '../../assets/images/logo-white/logo.png' )}
				/>
				<View style={styles.wrapperOnboarding}>
					<Typography variant="largeTitle" color="white">Experts</Typography>
					<Spacing size="small" />
					<Typography variant="midTitle" color="white">Get smarter. Tap into the knowledge around of you.</Typography>
					<Spacing size="base" />
					<SliderCircles circles={3} activeCircle={1} />
					<Spacing size="base" />
					<View style={styles.wrapperButtons}>
						<Button text="Create account" textColor={colors.blackLabels} buttonColor={colors.white} />
						<Spacing size="small" horizontal />
						<Button text="Sign in" textColor={colors.white} buttonColor={colors.orange} />
					</View>
					<Spacing size="base" />
					<Typography variant="smallBody" color="white">{TEXT_ONBOARDING1}</Typography>
				</View>
			</ImageBackground>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

export default Onboarding;
