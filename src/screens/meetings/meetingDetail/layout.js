import React from 'react';
import {
	View, StatusBar, Platform, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../../components/header/Header';
import Typography from '../../../components/typography/Typography';
import styles from './styles';
import Timer from '../../../components/timer';
import NavigatorPropType from '../../../types/navigator';

const MeetingDetail = ( { onPressBack, meeting, navigator } ) => (
	<View style={styles.container}>
		<View>
			<StatusBar
				barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
			/>
			<Header
				onPressBack={onPressBack}
			/>
			<Typography
				variant="semiLargeTitle"
				color="white"
				textAlign="left"
			>
				{'Meeting'}
			</Typography>
			<Typography
				color="white"
				textAlign="left"
				variant="midTitle"
			>
				{meeting.date}
			</Typography>
		</View>

		<View style={styles.meetingContaienr}>
			<View style={styles.meetingWrapper}>
				<View style={styles.imageContainer}>
					<Image style={styles.imageProfile} source={meeting.profilePict} />
					<Image source={meeting.profilePict} style={styles.imageProfile} />
				</View>
				<View style={styles.timerContainer}>
					<Timer minutes={60} navigator={navigator} />
				</View>
			</View>
		</View>

	</View>
);

MeetingDetail.propTypes = {
	onPressBack: PropTypes.func.isRequired,
	meeting: PropTypes.shape( {
		date: PropTypes.string,
		meetingId: PropTypes.string,
		profilePict: PropTypes.number,
		state: PropTypes.number,
		text: PropTypes.string
	} ).isRequired,
	navigator: NavigatorPropType.isRequired
};

export default MeetingDetail;
