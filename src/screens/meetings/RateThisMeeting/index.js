/* @flow */

import React, { Component } from 'react';
import {
	View, Image, TouchableOpacity, Text, StatusBar, Platform, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigatorPropType from '../../../types/navigator';
import Typography from '../../../components/typography/Typography';
import colors from '../../../theme/palette';
import SkillCard from '../../../components/skills/skill-card/SkillCard';
import Button from '../../../components/button/Button';

import MeetingsRequestImage from '../../../assets/images/meetings/meetingsRequest.png';
import imageProfileDefault from '../../../assets/images/meetings/frankDoeCopia3.png';

import s from './styles';

class RateThisMeeting extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {}

	componentDidMount() { this._onStarPress( 2 ); }

	_onStarPress = ( i ) => {
		Array.from( { length: 5 } ).forEach( ( e, _i ) => this.setState( { [ `star${_i}selected` ]: false } ) );
		Array.from( { length: i + 1 } ).forEach( ( e, _i ) => this.setState( { [ `star${_i}selected` ]: true } ) );
	}

	_onSkillPress = ( i ) => {
		this.setState( ( { [ `skill${i}selected` ]: skillSelected } ) => ( {
			[ `skill${i}selected` ]: !skillSelected
		} ) );
	}

	_onPressSubmit() {
		const { navigator } = this.props;
		navigator.push( { screen: 'meetingSummary' } );
	}

	render() {
		const infoText = 'If you have any issues with this meeting or the person you’ve met with, please contact';
		const link = 'support@nowaccomplish.com';
		const infoText2 = 'immediately (within 24 hours of the meeting ending) for resolution.';

		const skills = [
			'Designer',
			'Coaching',
			'User Experience'
		];

		return (
			<View style={s.container}>
				<StatusBar
					barStyle="dark-content"
				/>
				<View style={s.shadowStatusBar} />
				<ScrollView style={s.container} contentContainerStyle={s.scrollView}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>
					<View style={s.rateThisMeeting}>
						<View style={s.iconContainer}>
							<Image source={MeetingsRequestImage} resizeMode="contain" style={s.icon} />
						</View>
						<View style={s.separator} />
						<View style={s.titleContainer}>
							<Typography
								variant="midTitle"
								color="charcoalGrey"
								textAlign="center"
							>
								{'How would you rate this meeting?'}
							</Typography>
						</View>
						<View style={s.separator} />
						<View style={s.starsContainer}>
							{/* eslint-disable react/destructuring-assignment */}
							{Array.from( { length: 5 } ).map( ( star, i ) => (
								<TouchableOpacity key={Math.random()} onPress={() => this._onStarPress( i )}>
									<Icon name="star" style={[ s.star, this.state[ `star${i}selected` ] ? s.starOn : s.starOff ]} />
								</TouchableOpacity>
							) )}
							{/* eslint-enable react/destructuring-assignment */}
						</View>
						<View style={s.separator} />
						<View style={s.textContainer}>
							<Typography
								variant="midBody"
								color="charcoalGrey"
								textAlign="center"
							>
								{'Which of the following hot words would you endorse'}
							</Typography>
						</View>
						<View style={s.separator} />
						<View style={s.profileContainer}>
							<Image source={imageProfileDefault} resizeMode="contain" style={s.imageProfile} />
							<Typography
								variant="midBody"
								color="charcoalGrey"
								textAlign="center"
							>
								{'John Doe'}
							</Typography>
						</View>
					</View>
					<View style={s.separator} />
					<View style={s.skillsContainer}>
						{/* eslint-disable react/destructuring-assignment */}
						{skills.map( ( skill, i ) => (
							<SkillCard
								noClose
								text={skill}
								key={Math.random()}
								onPress={() => this._onSkillPress( i )}
								isSelected={this.state[ `skill${i}selected` ]}
							/>
						) )}
						{/* eslint-enable react/destructuring-assignment */}
					</View>
					<View style={s.separator} />
					<View style={s.infoText}>
						<Text>
							<Typography variant="littleBody" color="charcoalGrey">
								{infoText}
							</Typography>
							<Typography variant="littleBody" color="darkSkyBlue">
								{` ${link} `}
							</Typography>
							<Typography variant="littleBody" color="charcoalGrey">
								{infoText2}
							</Typography>
						</Text>
					</View>
					<View style={s.separator} />
					<View style={s.buttonsContainer}>
						<Button
							text="Skip"
							textColor={colors.white}
							buttonColor={colors.yellowishOrange}
							style={s.buttonStyle}
							onPress={() => alert( 'Skip' )}
						/>
						<View style={s.verticalSeparator} />
						<Button
							text="Submit"
							textColor={colors.white}
							buttonColor={colors.darkSkyBlue}
							style={s.buttonStyle}
							onPress={() => this._onPressSubmit()}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

RateThisMeeting.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default RateThisMeeting;
