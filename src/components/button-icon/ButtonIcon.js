import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import fonts from '../../theme/fonts';

const ButtonIcon = ( {
	text,
	textColor,
	onPress,
	iconName,
	iconStyle,
	style
} ) => (
	<TouchableOpacity
		style={[ styles.button, style ]}
		activeOpacity={0.9}
		onPress={onPress}
	>
		<Icon name={iconName} style={[ styles.icon, iconStyle ]} />
		<Text style={[ styles.label, { color: textColor, fontFamily: fonts.productSansRegular } ]}>
			{text}
		</Text>
	</TouchableOpacity>
);

ButtonIcon.propTypes = {
	textColor: PropTypes.string,
	text: PropTypes.string,
	iconName: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	iconStyle: PropTypes.objectOf( PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number
	] ) )
};

ButtonIcon.defaultProps = {
	onPress: () => {},
	text: '',
	iconStyle: {},
	textColor: 'black'
};

export default ButtonIcon;
