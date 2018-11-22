import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';
import ButtonIcon from '../button-icon/ButtonIcon';
import Colors from '../../theme/palette';
import Person from '../../entities/Person';

const MessagePreview = ( { onPress, person, ...meeting } ) => {
	const onPressMessage = () => onPress(meeting);

	return (<TouchableOpacity onPress={onPressMessage} style={s.meeting} key={meeting.meetingId}>
		<View style={s.imageContainer}>
			<Image style={[ s.imageUserRight ]} source={meeting.profilePict} />
			<Image source={person.image} style={[ s.imageUser ]} />

			<View style={s.bottomStatus}>
				<Typography variant="smallBody" color="skyBlue" textAlign="center">
					{meeting.state}
				</Typography>
			</View>
		</View>
		<View style={s.dataContainer}>
			<View style={s.textButtonAndNameContainer}>
				<View style={s.textAndNameContainer}>
					<Typography
						variant="smallBody"
						color="charcoalGrey"
						textAlign="center"
					>
						{'Meeting with'}
					</Typography>
					<Typography
						variant="smallTitleBold"
						color="charcoalGrey"
						textAlign="center"
					>
						{`${person.firstName}`}
					</Typography>
					<Typography
						variant="smallBody"
						color="charcoalGrey"
						textAlign="center"
					>
						{'10:10 AM'}
					</Typography>
				</View>
				<View style={s.iconContainer}>
					<ButtonIcon
						iconName="keyboard-arrow-right"
						iconStyle={{ color: Colors.nextGray, margin: 0 }}
					/>
				</View>
			</View>
		</View>
	</TouchableOpacity>
	);

}


MessagePreview.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired,
	onPress: PropTypes.func.isRequired
};

export default MessagePreview;
