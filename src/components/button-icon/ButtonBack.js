import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonIcon from './ButtonIcon';
import Colors from '../../theme/palette';

const buttonBack = ( { color, onPress } ) => (
	<ButtonIcon
		iconName="arrow-back"
		iconStyle={{ color }}
		style={styles.buttonBack}
		onPress={onPress}
	/>
);

buttonBack.propTypes = {
	color: PropTypes.string,
	onPress: PropTypes.func
};

buttonBack.defaultProps = {
	color: Colors.white,
	onPress: () => {}
};

export default buttonBack;
