import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import styles from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';
import Typography from '../typography/Typography';

const Header = ( {
	title, onPressBack, color, titleSize
} ) => (
	<View>
		<ButtonIcon
			iconName="arrow-back"
			style={{ top: Platform.OS === 'ios' ? '5%' : 0 }}
			onPress={onPressBack}
		/>
		<View style={styles.titleWrapper}>
			<Typography
				variant={titleSize === 'normal' ? 'semiLargeTitle' : 'semiSmallTitle'}
				color={color}
				textAlign="left"
			>
				{title}
			</Typography>
		</View>
	</View>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onPressBack: PropTypes.func,
	color: PropTypes.string,
	titleSize: PropTypes.oneOf( [ 'small', 'normal' ] )
};

Header.defaultProps = {
	onPressBack: () => {},
	color: 'darkSkyBlue',
	titleSize: 'normal'
};

export default Header;
