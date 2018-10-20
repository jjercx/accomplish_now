import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonIcon from './ButtonIcon';
import Colors from '../../theme/palette';

const buttonForward = ( { style, enabled, ...props } ) => (
	<ButtonIcon iconName="arrow-forward" iconStyle={{ color: 'white' }} style={[ styles.buttonForwardContainer, { backgroundColor: enabled ? Colors.macaroneAndCheese : Colors.disabled }, style ]} {...props} />
);

buttonForward.propTypes = {
	enabled: PropTypes.bool
};

buttonForward.defaultProps = {
	enabled: false
};

export default buttonForward;
