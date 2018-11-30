import React from 'react';
import {
	Modal, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


import styles from './styles';

const CustomModal = ( {
	isVisible,
	onPressOut,
	transparent,
	children,
	...modalProps
} ) => (
	<Modal visible={isVisible} transparent={transparent} {...modalProps}>
		<TouchableOpacity activeOpacity={1} onPress={onPressOut} style={styles.container}>
			{children}
		</TouchableOpacity>
	</Modal>
);

CustomModal.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	transparent: PropTypes.bool.isRequired,
	onPressOut: PropTypes.func.isRequired
};

export default CustomModal;
