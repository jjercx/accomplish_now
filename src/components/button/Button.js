import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import fonts from '../../theme/fonts';

const Button = ( {
	text,
	textColor,
	buttonColor,
	onPress,
	style
} ) => (
	<TouchableOpacity
		style={[ styles.button, { backgroundColor: buttonColor }, style ]}
		activeOpacity={0.4}
		onPress={onPress}
	>
		<Text style={[ styles.label, { color: textColor, fontFamily: fonts.productSansRegular } ]}>
			{text}
		</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	textColor: PropTypes.string.isRequired,
	buttonColor: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	text: PropTypes.string.isRequired,
	style: PropTypes.objectOf( PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number
	] ) )
};

Button.defaultProps = {
	onPress: () => {},
	style: {}
};


export default Button;
