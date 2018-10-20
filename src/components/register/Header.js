import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';
import Typography from '../typography/Typography';

const Header = ( { title, onPressBack, color } ) => (
	<View>
		<ButtonIcon iconName="arrow-back" style={{ top: '5%' }} onPress={onPressBack} />
		<View style={styles.titleWrapper}>
			<Typography variant="semiLargeTitle" color={color} textAlign="left">{title}</Typography>
		</View>
	</View>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onPressBack: PropTypes.func,
	color: PropTypes.string
};

Header.defaultProps = {
	onPressBack: () => {},
	color: 'darkSkyBlue'
};

export default Header;
