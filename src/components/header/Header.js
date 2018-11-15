/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
	View, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import ButtonSetting from '../button-setting/ButtonSetting';
import styles from './styles';

const logoAccomplish = require( '../../assets/images/messages/isoGray.png' );

const Header = ( {
	onPressBack,
	buttonIcons,
	notification
} ) => (
	<View style={styles.headerButtonsContainer}>
		<View style={styles.headerButtonAccomplishContainer}>
			<TouchableOpacity onPress={onPressBack}>
				<View style={styles.buttonAccomplish}>
					<Image
						style={styles.logo}
						source={logoAccomplish}
					/>
				</View>
			</TouchableOpacity>
		</View>

		{
			buttonIcons.map( icon => (
				<View key={icon.id} style={styles.headerButtonNotificationsContainer}>
					<ButtonSetting
						onPress={icon.onPress}
						source={icon.icon}
					/>
					<View style={[ styles.notification, { opacity: notification ? 1 : 0 } ]} />
				</View>
			)
			)
		}

	</View>
);

Header.propTypes = {
	onPressBack: PropTypes.func,
	buttonIcons: PropTypes.array,
	notification: PropTypes.bool
};

Header.defaultProps = {
	buttonIcons: [],
	onPressBack: () => {},
	notification: false
};

export default Header;
