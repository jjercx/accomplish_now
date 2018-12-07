import React from 'react';
import {
	View, Image, ScrollView, StatusBar, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../components/button/Button';
import Typography from '../../../components/typography/Typography';
import colors from '../../../theme/palette';

import imageProfileDefault from '../../../assets/images/meetings/frankDoeCopia3.png';

import s from './styles';

class MeetingSummary extends React.Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = { watchingMeetingFinished: false }

	_onContinue = () => this.setState( { watchingMeetingFinished: true } )

	_onBack = () => this.setState( { watchingMeetingFinished: false } )

	render() {
		const data = {
			meetingWith: 'John Doe',
			startTime: 'November 19, 2018 6:24 P.M.',
			endTime: 'November 19, 2018 7:24 P.M.',
			breaks: '0',
			totalDuration: '1 hour, 1 min.',
			starsRating: 3
		};

		const sectionData = {
			'Start Time': data.startTime,
			'End Time': data.endTime,
			'Breaks': data.breaks,
			'Total Duration': data.totalDuration
		};

		const { watchingMeetingFinished } = this.state;

		return (
			<View style={s.container}>
				<StatusBar
					barStyle="dark-content"
				/>
				<View style={s.shadowStatusBar} />
				{watchingMeetingFinished && (
					<TouchableOpacity style={s.arrowBackContainer} onPress={() => this._onBack()}>
						<Icon
							name="arrow-back"
							style={s.arrowBack}
						/>
					</TouchableOpacity>
				)}
				<ScrollView style={s.container}>
					{!watchingMeetingFinished && <View style={s.separator} /> }
					<View style={s.separator} />
					<View style={s.header}>
						<View style={s.profileImagesContainer}>
							<Image source={imageProfileDefault} resizeMode="contain" style={s.imageProfile} />
							<View style={s.verticalSeparator} />
							<Image source={imageProfileDefault} resizeMode="contain" style={s.imageProfile} />
						</View>
						<View style={s.separator} />
						<Typography variant="smallTitleBold" color="charcoalGrey">
							{'Meeting with'}
						</Typography>
						<Typography variant="midTitle" color="charcoalGrey">
							{data.meetingWith}
						</Typography>
					</View>
					<View style={s.mediumSeparator} />
					{Object.keys( sectionData ).map( key => (
						<View style={s.section} key={key}>
							<Typography variant="smallTitleBold" color="charcoalGrey">
								{key}
							</Typography>
							<View style={s.mediumSeparator} />
							<Typography variant="midBody" color="charcoalGrey">
								{sectionData[ key ]}
							</Typography>
						</View>
					) )}
					<View style={s.section}>
						<Typography variant="smallTitleBold" color="charcoalGrey">
							{'Meeting rating'}
						</Typography>
						<View style={s.mediumSeparator} />
						<View style={s.starsContainer}>
							{Array.from( { length: 5 } ).map( ( star, i ) => (
								<Icon name="star" key={Math.random()} style={[ s.star, i < data.starsRating ? s.starOn : s.starOff ]} />
							) )}
						</View>
					</View>
					<View style={s.line} />
					{!watchingMeetingFinished && (
						<View>
							<View style={s.separator} />
							<View style={s.infoText}>
								<Typography variant="littleBody" color="charcoalGrey">
									{'Accomplish takes a 13% transaction fee which covers charges for the Stripe payment gateway.'}
								</Typography>
							</View>
							<View style={s.buttonContainer}>
								<Button
									text="Continue"
									textColor={colors.white}
									buttonColor={colors.darkSkyBlue}
									style={s.buttonStyle}
									onPress={() => this._onContinue()}
								/>
							</View>
						</View>
					)}
				</ScrollView>
			</View>
		);
	}
}

export default MeetingSummary;
