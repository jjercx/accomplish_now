import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ( {
	text,
	textColor,
	buttonColor,
	onPress
} ) => (
	<TouchableOpacity
		style={[ styles.button, { backgroundColor: buttonColor } ]}
		activeOpacity={0.9}
		onPress={onPress}
	>
		<Text style={[ styles.label, { color: textColor } ]}>
			{text}
		</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	textColor: PropTypes.string.isRequired,
	buttonColor: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	text: PropTypes.string.isRequired
};

Button.defaultProps = {
	onPress: () => {}
};


export default Button;
