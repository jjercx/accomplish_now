import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import ButtonBack from '../../button-icon/ButtonBack';
import styles from './styles';

const Header = ( { onPressBack, backButton } ) => (
	<ImageBackground
		source={require( '../../../assets/images/home/header.png' )}
		style={styles.imageBackground}
	>
		{
			backButton && <ButtonBack onPress={onPressBack} />
		}
	</ImageBackground>
);

Header.propTypes = {
	onPressBack: PropTypes.func,
	backButton: PropTypes.bool
};

Header.defaultProps = {
	onPressBack: () => {},
	backButton: false
};

export default Header;
