import React, { Component } from 'react';
import {
	ImageBackground,
	Image,
	View
} from 'react-native';

import Spacing from '../../components/spacing/Spacing';
import Typography from '../../components/typography/Typography';
import SliderCircles from '../../components/slider/slider-circles/SliderCircles';

const styles = {
	imageBackground: {
		flex: 1,
		alignItems: 'center'
	},
	logo: {
		width: 192.3,
		height: 105.3
	},
	wrapperOnboardingText: {
		top: '35%',
		alignItems: 'center',
		width: '84%'
	}
};

/* eslint-disable react/prefer-stateless-function */
class Onboarding1 extends Component {
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
				<View style={styles.wrapperOnboardingText}>
					<Typography variant="largeTitle" color="white">Experts</Typography>
					<Spacing size="small" />
					<Typography variant="midTitle" color="white">Get smarter. Tap into the knowledge around of you.</Typography>
					<Spacing size="base" />
					<SliderCircles circles={3} activeCircle={1} />
				</View>
			</ImageBackground>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

export default Onboarding1;
