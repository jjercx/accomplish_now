import React, { Component } from 'react';
import {
	View, Image
} from 'react-native';

import Swiper from 'react-native-swiper';

import {
	widthPercentageToDP as wd,
	heightPercentageToDP as hd
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../utils/dimensions';

import OnboardingSlide from '../components/onboarding/onboarding-slide/OnboardingSlide';
import NavigatorPropType from '../types/navigator';
import Spacing from '../components/spacing/Spacing';
import spacings from '../components/spacing/styles';
import Button from '../components/button/Button';
import Typography from '../components/typography/Typography';
import colors from '../theme/palette';

const IMG_ONBOARDING1 = require( '../assets/images/onboardings/experts.png' );
const IMG_ONBOARDING2 = require( '../assets/images/onboardings/meetings.png' );
const IMG_ONBOARDING3 = require( '../assets/images/onboardings/workspaces.png' );

const styles = {
	container: {
		flex: 1
	},
	accomplishLogoContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperOnboarding: {
		position: 'absolute',
		left: 0,
		right: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: hd( '5%' ),
		marginHorizontal: wd( WTP( spacings.medium ) )
	},
	slide: {
		flex: 1
	},
	logo: {
		width: wd( WTP( 192 ) ),
		height: hd( HTP( 105 ) )
	},
	wrapperButtons: {
		flexDirection: 'row'
	},
	wrapperButton: {
		flex: 0.5
	}
};

class Onboarding extends Component {
	_onPressNewAccount() {
		const { navigator } = this.props;
		navigator.push( {
			screen: 'createWelcomeAccount',
			passProps: { createAccount: true }
		} );
	}

	_onPressSignIn() {
		const { navigator } = this.props;
		navigator.push( {
			screen: 'createWelcomeAccount',
			passProps: { createAccount: false }
		} );
	}

	render() {
		const screenData = {
			slides: [
				'Experts',
				'Meetings',
				'Workspaces'
			],
			TEXT_ONBOARDING: 'By continuing you are agreeing with our terms of service and privacy policy.',
			TEXT_SUBTITLE1: 'Get  smarter. Tap into the knowledge around of you.',
			IMG_ONBOARDING1,
			TEXT_SUBTITLE2: 'Get paid. Secure, in-app payments and down to the minute time tracking, get the most of your conversations.',
			IMG_ONBOARDING2,
			TEXT_SUBTITLE3: 'Find your neighborhood’s most productive places to get your work done and take metings with experts.',
			IMG_ONBOARDING3
		};

		return (
			<View style={styles.container}>
				<Swiper style={styles.wrapper} showsPagination={false}>
					{screenData.slides.map( ( screenText, i ) => (
						<View style={styles.slide} key={screenText}>
							<OnboardingSlide
								title={screenText}
								subTitle={screenData[ `TEXT_SUBTITLE${i + 1}` ]}
								image={screenData[ `IMG_ONBOARDING${i + 1}` ]}
								numSlide={( i + 1 )}
							/>
						</View>
					) )}
				</Swiper>
				<View style={styles.accomplishLogoContainer}>
					<Spacing size="xLarge" />
					<Image
						style={styles.logo}
						source={require( '../assets/images/logo-white/logo.png' )}
					/>
				</View>
				<View style={styles.wrapperOnboarding}>
					<Spacing size="small" />
					<View style={styles.wrapperButtons}>
						<View style={styles.wrapperButton}>
							<Button
								text="Create account"
								textColor={colors.blackLabels}
								buttonColor={colors.white}
								onPress={() => this._onPressNewAccount()}
							/>
						</View>
						<Spacing size="small" horizontal />
						<View style={styles.wrapperButton}>
							<Button
								text="Sign in"
								textColor={colors.white}
								buttonColor={colors.orange}
								onPress={() => this._onPressSignIn()}
							/>
						</View>
					</View>
					<Spacing size="base" />
					<Typography variant="smallBody" color="white">{screenData.TEXT_ONBOARDING}</Typography>
				</View>
			</View>
		);
	}
}

Onboarding.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Onboarding;
