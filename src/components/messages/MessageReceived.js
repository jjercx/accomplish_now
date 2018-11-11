import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';

const MessageReceived = ( { text, image, date } ) => (
	<View style={s.mrContainer}>
		<View style={s.mrImageContainer}>
			<Image
				style={s.mrImage}
				source={image}
			/>
		</View>
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
	date: PropTypes.string.isRequired
};

export default MessageReceived;
