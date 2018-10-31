import React from 'react';
import {
	ImageBackground,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import Spacing from '../../spacing/Spacing';
import Typography from '../../typography/Typography';

const OnboardingSlide = ( {
	image,
	title,
	subTitle
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
		</View>
	</ImageBackground>
);

OnboardingSlide.propTypes = {
	image: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired
};

export default OnboardingSlide;
