import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import ButtonBack from '../../button-icon/ButtonBack';
import styles from './styles';

const Header = ( { onPressBack } ) => (
	<ImageBackground
		source={require( '../../../assets/images/home/header.png' )}
		style={styles.imageBackground}
	>
		<ButtonBack onPress={onPressBack} />
	</ImageBackground>
);

Header.propTypes = {
	onPressBack: PropTypes.func
};

Header.defaultProps = {
	onPressBack: () => {}
};

export default Header;
