import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonIcon from './ButtonIcon';
import Colors from '../../theme/palette';

const buttonForward = ( {
	style, editing, enabled, ...props
} ) => (
	<ButtonIcon iconName={editing ? 'save' : 'arrow-forward'} iconStyle={{ color: 'white' }} style={[ styles.buttonForwardContainer, { backgroundColor: enabled ? Colors.macaroneAndCheese : Colors.disabled }, style ]} {...props} />
);

buttonForward.propTypes = {
	editing: PropTypes.bool,
	enabled: PropTypes.bool
};

buttonForward.defaultProps = {
	editing: false,
	enabled: false
};

export default buttonForward;
