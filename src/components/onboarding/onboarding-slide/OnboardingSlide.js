import React from 'react';
import {
	ImageBackground,
	Image,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import Spacing from '../../spacing/Spacing';
import Typography from '../../typography/Typography';
import SliderCircles from '../../slider/slider-circles/SliderCircles';
import Button from '../../button/Button';
import colors from '../../../theme/palette';

const OnboardingSlide = ( {
	text,
	image,
	title,
	subTitle,
	numSlide,
	onPressNewAccount,
	onPressSignIn
} ) => (
	<ImageBackground
		source={image}
		style={styles.imageBackground}
	>
		<Spacing size="xLarge" />
		<Image
			style={styles.logo}
			source={require( '../../../assets/images/logo-white/logo.png' )}
		/>
		<View style={styles.wrapperOnboarding}>
			<Typography variant="largeTitle" color="white">{title}</Typography>
			<Spacing size="small" />
			<View style={styles.wrapperSubTitle}>
				<Typography variant="midTitle" color="white" textAlign="center">{subTitle}</Typography>
			</View>
			<Spacing size="base" />
			<SliderCircles circles={3} activeCircle={numSlide} />
			<Spacing size="base" />
			<View style={styles.wrapperButtons}>
				<Button text="Create account" textColor={colors.blackLabels} buttonColor={colors.white} onPress={onPressNewAccount} />
				<Spacing size="small" horizontal />
				<Button text="Sign in" textColor={colors.white} buttonColor={colors.orange} onPress={onPressSignIn} />
			</View>
			<Spacing size="base" />
			<Typography variant="smallBody" color="white">{text}</Typography>
		</View>
	</ImageBackground>
);

OnboardingSlide.propTypes = {
	text: PropTypes.string.isRequired,
	image: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	numSlide: PropTypes.number.isRequired,
	onPressNewAccount: PropTypes.func,
	onPressSignIn: PropTypes.func
};

OnboardingSlide.defaultProps = {
	onPressNewAccount: () => {},
	onPressSignIn: () => {}
};

export default OnboardingSlide;
