import React from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Typography from '../typography/Typography';
import styles from './styles';

const ButtonEdit = ( { text, style, onPress } ) => (
	<TouchableOpacity
		activeOpacity={0.9}
		style={[ styles.buttonEdit, style ]}
		onPress={onPress}
	>
		<Image style={styles.iconEdit} source={require( '../../assets/images/icons/edit.png' )} />
		<Typography variant="midBody" color="editButton">
			{text}
		</Typography>
	</TouchableOpacity>
);

ButtonEdit.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
	style: ViewPropTypes.style
};

ButtonEdit.defaultProps = {
	text: 'Edit',
	onPress: () => {},
	style: {}
};

export default ButtonEdit;
