import React, { Component } from 'react';
import {
	View
} from 'react-native';

import Swiper from 'react-native-swiper';
import OnboardingSlide from '../components/onboarding/onboarding-slide/OnboardingSlide';
import NavigatorPropType from '../types/navigator';

const styles = {
	wrapper: {
	},
	slide: {
		flex: 1
	}
};

const TEXT_ONBOARDING = 'By continuing you are agreeing with our terms of service and privacy policy.';
const TEXT_SUBTITLE1 = 'Get  smarter. Tap into the knowledge around of you.';
const IMG_ONBOARDING1 = require( '../assets/images/onboardings/experts.png' );

const TEXT_SUBTITLE2 = 'Get paid. Secure, in-app payments and down to the minute time tracking, get the most of your conversations.';
const IMG_ONBOARDING2 = require( '../assets/images/onboardings/meetings.png' );

const TEXT_SUBTITLE3 = 'Find your neighborhood’s most productive places to get your work done and take metings with experts.';
const IMG_ONBOARDING3 = require( '../assets/images/onboardings/workspaces.png' );

class Onboarding extends Component {
	/* eslint-disable class-methods-use-this */
	_onPressNewAccount() {
		// goToNewAccount
	}
	/* eslint-enable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	_onPressSignIn() {
		const { navigator } = this.props;
		navigator.push( { screen: 'home' } );
	}
	/* eslint-enable class-methods-use-this */

	render() {
		return (
			<Swiper style={styles.wrapper} showsPagination={false}>
				<View style={styles.slide}>
					<OnboardingSlide
						text={TEXT_ONBOARDING}
						title="Experts"
						subTitle={TEXT_SUBTITLE1}
						image={IMG_ONBOARDING1}
						numSlide={1}
						onPressNewAccount={() => this._onPressNewAccount()}
						onPressSignIn={() => this._onPressSignIn()}
					/>
				</View>
				<View style={styles.slide}>
					<OnboardingSlide
						text={TEXT_ONBOARDING}
						title="Meetings"
						subTitle={TEXT_SUBTITLE2}
						image={IMG_ONBOARDING2}
						numSlide={2}
						onPressNewAccount={() => this._onPressNewAccount()}
						onPressSignIn={() => this._onPressSignIn()}
					/>
				</View>
				<View style={styles.slide}>
					<OnboardingSlide
						text={TEXT_ONBOARDING}
						title="Workspaces"
						subTitle={TEXT_SUBTITLE3}
						image={IMG_ONBOARDING3}
						numSlide={3}
						onPressNewAccount={() => this._onPressNewAccount()}
						onPressSignIn={() => this._onPressSignIn()}
					/>
				</View>
			</Swiper>
		);
	}
}

Onboarding.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Onboarding;
