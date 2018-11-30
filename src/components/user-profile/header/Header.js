import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import ButtonBack from '../../button-icon/ButtonBack';
import ButtonIcon from '../../button-icon/ButtonIcon';
import Colors from '../../../theme/palette';
import styles from './styles';

const Header = ( { onPressBack, onPressSettings } ) => (
	<ImageBackground
		source={require( '../../../assets/images/home/header.png' )}
		style={styles.imageBackground}
	>
		{
			onPressBack && <ButtonBack onPress={onPressBack} />
		}

		{
			onPressSettings && (
				<ButtonIcon
					iconName="settings"
					iconStyle={{ color: Colors.white }}
					onPress={onPressSettings}
				/>
			)
		}
	</ImageBackground>
);

Header.propTypes = {
	onPressBack: PropTypes.func,
	onPressSettings: PropTypes.func
};

Header.defaultProps = {
	onPressBack: null,
	onPressSettings: null
};

export default Header;
