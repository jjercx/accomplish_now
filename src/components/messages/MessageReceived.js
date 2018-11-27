import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';
import Image from '../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const MessageReceived = ( {
	text, date, image, onUserPress
} ) => (
	<View style={s.mrContainer}>
		<TouchableOpacity style={s.mrImageContainer} onPress={onUserPress}>
			<Image
				style={[ s.imageProfile ]}
				source={image}
			/>
		</TouchableOpacity>
		<View style={s.mrTextContainer}>
			<View style={s.mrTextBuble}>
				<Typography
					variant="smallTitle"
					color="charcoalGrey"
					textAlign="left"
				>
					{text}
				</Typography>
			</View>
			<View style={s.mrTextBubleTriangle} />
			<View style={s.mrTimeAgo}>
				<Typography
					variant="smallBody"
					color="pinkishGrey"
					textAlign="left"
				>
					{date}
				</Typography>
			</View>
		</View>
	</View>
);

MessageReceived.propTypes = {
	text: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
	date: PropTypes.string.isRequired,
	onUserPress: PropTypes.func.isRequired
};

export default MessageReceived;
