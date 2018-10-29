import React from 'react';
import {
	ImageBackground,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import Spacing from '../../spacing/Spacing';
import Typography from '../../typography/Typography';
import SliderCircles from '../../slider/slider-circles/SliderCircles';

const OnboardingSlide = ( {
	image,
	title,
	subTitle,
	numSlide
} ) => (
	<ImageBackground
		source={image}
		style={styles.imageBackground}
	>
		<View style={styles.wrapperOnboarding}>
			<Typography variant="largeTitle" color="white">{title}</Typography>
			<Spacing size="small" />
			<View style={styles.wrapperSubTitle}>
				<Typography variant="midTitle" color="white" textAlign="center">{subTitle}</Typography>
			</View>
			<Spacing size="small" />
			<SliderCircles circles={3} activeCircle={numSlide} />
			<Spacing size="small" />
		</View>
	</ImageBackground>
);

OnboardingSlide.propTypes = {
	image: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	numSlide: PropTypes.number.isRequired
};

export default OnboardingSlide;
