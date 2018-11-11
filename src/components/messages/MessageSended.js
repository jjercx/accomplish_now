import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import Typography from '../typography/Typography';

const MessageSended = ( { text, date } ) => (
	<View style={s.msContainer}>
		<View style={s.msTextBuble}>
			<Typography
				variant="smallTitle"
				color="white"
				textAlign="left"
			>
				{text}
			</Typography>
		</View>
		<View style={s.msTimeAgo}>
			<Typography
				variant="smallBody"
				color="pinkishGrey"
				textAlign="left"
			>
				{date}
			</Typography>
		</View>
	</View>
);


MessageSended.propTypes = {
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
};

export default MessageSended;
