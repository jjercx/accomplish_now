import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';
import Image from '../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const NotificationPreview = ( {
	 text,
	 action,
	 image,
	 onPress
} ) => (
	<TouchableOpacity style={s.npContainer} onPress={onPress}>
		<View style={s.npImageContainer}>
			<Image
				style={s.npImage}
				source={image}
				resizeMode="cover"
			/>
		</View>
		<View style={s.npTextNotificationContainer}>
			<Typography
				variant="midBody"
				color="charcoalGrey"
				textAlign="left"
			>
				{text}
			</Typography>
			<Typography
				variant="smallBody"
				color="pinkishGrey"
				textAlign="left"
			>
				{action}
			</Typography>
		</View>
	</TouchableOpacity>
);


NotificationPreview.propTypes = {
	text: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
	onPress: PropTypes.func.isRequired
};

export default NotificationPreview;
