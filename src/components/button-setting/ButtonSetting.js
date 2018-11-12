import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonSetting = ( {
	onPress,
	source
} ) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.buttonIconSettings}>
			<Image source={source} />
		</View>
	</TouchableOpacity>
);

ButtonSetting.propTypes = {
	onPress: PropTypes.func,
	source: PropTypes.number
};

ButtonSetting.defaultProps = {
	source: 0,
	onPress: () => {}
};

export default ButtonSetting;
