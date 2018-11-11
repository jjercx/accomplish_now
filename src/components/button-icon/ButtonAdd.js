import React from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonAdd = ( { style, onPress } ) => (
	<TouchableOpacity
		activeOpacity={0.9}
		style={[ styles.buttonAdd, style ]}
		onPress={onPress}
	>
		<Image source={require( '../../assets/images/icons/add.png' )} />
	</TouchableOpacity>
);

ButtonAdd.propTypes = {
	style: ViewPropTypes.style,
	onPress: PropTypes.func
};

ButtonAdd.defaultProps = {
	style: {},
	onPress: () => {}
};

export default ButtonAdd;
