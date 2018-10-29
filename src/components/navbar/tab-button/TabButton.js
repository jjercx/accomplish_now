import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Spacing from '../../spacing/Spacing';
import Typography from '../../typography/Typography';

const TabButton = ( {
	onPress,
	image,
	text,
	imageWidth,
	imageHeight
} ) => (
	<TouchableOpacity
		activeOpacity={0.9}
		onPress={onPress}
		style={styles.tab}
	>
		<Image
			style={{ height: imageHeight, width: imageWidth }}
			source={image}
		/>
		<Spacing size="smallPlus" />
		<Typography variant="xsmallBody" color="darkSkyBlue">{text}</Typography>
	</TouchableOpacity>
);

TabButton.propTypes = {
	onPress: PropTypes.func,
	image: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	imageWidth: PropTypes.number.isRequired,
	imageHeight: PropTypes.number.isRequired
};

TabButton.defaultProps = {
	onPress: () => {}
};


export default TabButton;
