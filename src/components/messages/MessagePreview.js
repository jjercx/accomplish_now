import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';
import ButtonIcon from '../button-icon/ButtonIcon';
import Colors from '../../theme/palette';
import Person from '../../entities/Person';

const MessagePreview = ( { person, ...message } ) => (
	<View style={s.message}>
		<View style={s.imageContainer}>
			<Image
				style={[ s.imageProfile ]}
				source={person.image}
			/>
		</View>
		<View style={s.dataContainer}>
			<View style={s.dateContainerFather}>
				<View style={s.dateContainer}>
					<Typography
						variant="xsmallBody"
						color="lightGreyBlueTwo"
						textAlign="left"
					>
						{message.date}
					</Typography>
				</View>
			</View>
			<View style={s.textButtonAndNameContainer}>
				<View style={s.textAndNameContainer}>
					<Typography
						variant="midBody"
						color="charcoalGrey"
						textAlign="left"
					>
						{`${person.firstName} ${person.lastName}`}
					</Typography>
					<Typography
						variant="smallBody"
						color="lightGreyBlueTwo"
						textAlign="left"
					>
						{message.text}
					</Typography>
				</View>
				<View style={s.iconContainer}>
					<ButtonIcon
						iconName="keyboard-arrow-right"
						iconStyle={{ color: Colors.charcoalGrey, margin: 0 }}
					/>
				</View>
			</View>
		</View>
	</View>
);


MessagePreview.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired
};

export default MessagePreview;
