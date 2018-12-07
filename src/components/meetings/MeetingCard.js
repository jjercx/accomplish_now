import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Typography from '../typography/Typography';
import Button from '../button/Button';
import ButtonSetting from '../button-setting/ButtonSetting';
import Meeting, { getStateName } from '../../entities/Meeting';
import Colors from '../../theme/palette';
import styles from './styles';

const iconSettings = require( '../../assets/images/icons/dots.png' );

const MeetingCard = ( {
	buttonLeft,
	buttonRight,
	buttonDetails,
	meeting
} ) => (
	<View style={styles.meeting} key={meeting.meetingId}>
		<View style={styles.itemContainer}>
			<View style={styles.imageContainer}>
				<Image style={[ styles.imageUserRight ]} source={meeting.profilePict} />
				<Image source={meeting.person.image} style={[ styles.imageUser ]} />

				<View style={styles.bottomStatus}>
					<Typography variant="smallBody" color="charcoalGreyTwo" textAlign="center">
						{getStateName( meeting.state )}
					</Typography>
				</View>
			</View>
			<View style={styles.dataContainer}>
				<View style={styles.textAndNameContainer}>
					<Typography
						variant="smallTitleBold"
						color="charcoalGrey"
						textAlign="right"
					>
						{`${meeting.person.firstName} ${meeting.person.lastName}`}
					</Typography>
					<View style={styles.hourTextContainer}>
						<Typography
							variant="midBody"
							color="charcoalGrey"
							textAlign="right"
						>
							{'10:10 A.M.'}
						</Typography>
					</View>
					<Typography
						variant="midBody"
						color="charcoalGrey"
						textAlign="right"
					>
						{'123 Main Street'}
					</Typography>
				</View>
			</View>
		</View>
		{( buttonLeft !== null || buttonRight !== null ) && (
			<View style={styles.buttonsContainer}>
				{( buttonLeft !== null ) && (
					<Button
						text={buttonLeft.label}
						textColor={Colors.charcoalGreyTwo}
						buttonColor={Colors.orange}
						onPress={buttonLeft.onPress}
						style={styles.buttonLeft}
					/>
				)}
				{( buttonRight !== null ) && (
					<Button
						text={buttonRight.label}
						textColor={Colors.white}
						buttonColor={Colors.darkSkyBlue}
						onPress={buttonRight.onPress}
						style={styles.buttonRight}
					/>
				)}
			</View>
		)}
		{( buttonDetails !== null ) && (
			<View style={styles.buttonSettingContainer}>
				<ButtonSetting source={iconSettings} onPress={buttonDetails.onPress} />
			</View>
		)}
	</View>
);

MeetingCard.propTypes = {
	meeting: PropTypes.instanceOf( Meeting ).isRequired,
	buttonLeft: PropTypes.any,
	buttonRight: PropTypes.any,
	buttonDetails: PropTypes.any
};

MeetingCard.defaultProps = {
	buttonLeft: null,
	buttonRight: null,
	buttonDetails: null
};

export default MeetingCard;
